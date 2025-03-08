import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-clean-architecture',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clean-architecture.component.html',
  styleUrls: ['./clean-architecture.component.css']
})
export class CleanArchitectureComponent {
  solutionName: string = '';
  solutionPath: string = '';
  isAccordionOpen: boolean = true;
  isLoading: boolean = false;
  responseMessage: string = '';
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}
  
  toggleAccordion() {
    this.isAccordionOpen = !this.isAccordionOpen;
  }
  
  createProject() {
    if (!this.solutionName || !this.solutionPath) {
      this.toastr.warning('Please fill in all fields');
      return;
    }
    
    this.isLoading = true;
    
    this.http.post(`${environment.apiUrl}/api/create-clean-architecture`, {
      solutionName: this.solutionName,
      solutionPath: this.solutionPath
    }).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.toastr.success(`Project ${this.solutionName} created successfully inside ${this.solutionPath}!`);

        this.solutionName = '';
        this.solutionPath = '';
      },
      error: (error) => {
        this.isLoading = false;
        const errorMessage = error.message || 'Unknown error occurred';
        this.toastr.error(errorMessage, 'Error');
      }
    });
  }
} 