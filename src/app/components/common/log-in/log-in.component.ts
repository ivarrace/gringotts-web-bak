import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginFormData } from './log-in-form-data';
import { AuthSession } from 'src/app/shared/auth-session';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg = '';

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  loginUser() {
    this.authService.signIn(this.loginForm.value as LoginFormData).subscribe({
      //next: () => this.router.navigate(['/']),
      error: (error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.errorMsg = 'Invalid username / password';
        } else {
          this.errorMsg = 'Unknown error';
        }
      }
      //complete: () => this.router.navigate(['/']),
    });
  }
}
