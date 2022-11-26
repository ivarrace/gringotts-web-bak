import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RegisterFormData } from './register-form-data';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from 'src/app/data/types/user';
import { UserService } from 'src/app/data/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMsg = '';

  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public router: Router
  ) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  registerUser() {
    this.userService
      .registerUser(this.registerForm.value as RegisterFormData)
      .subscribe({
        next: (response: User) => {
          console.log(response);
          //this.authService.saveSession(response) //TODO
        },
        error: (error: HttpErrorResponse) => {
          this.errorMsg = error.error.message;
        },
        complete: () => this.router.navigate(['/login'])
      });
  }
}
