import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Apply default theme class to body
const savedTheme = localStorage.getItem('theme') || 'light-theme';
document.body.classList.add(savedTheme);

// Add dark class to html element if using dark theme
if (savedTheme === 'dark-theme') {
  document.documentElement.classList.add('dark');
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
