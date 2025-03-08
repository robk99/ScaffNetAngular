import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light-theme' | 'dark-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: Theme = 'light-theme';
  private themeSubject = new BehaviorSubject<Theme>(this.currentTheme);
  
  theme$ = this.themeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme() {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark-theme' : 'light-theme';
    }
    
    this.setTheme(this.currentTheme);
  }

  setTheme(theme: Theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Remove the other theme class and add the current one
    const body = document.body;
    this.renderer.removeClass(body, theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    this.renderer.addClass(body, theme);
    
    // Add or remove the 'dark' class for Tailwind dark mode
    if (theme === 'dark-theme') {
      this.renderer.addClass(document.documentElement, 'dark');
    } else {
      this.renderer.removeClass(document.documentElement, 'dark');
    }
    
    this.themeSubject.next(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.setTheme(newTheme);
  }

  isDarkTheme(): boolean {
    return this.currentTheme === 'dark-theme';
  }
} 