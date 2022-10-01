import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('formBox') formBox!: ElementRef;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;
  @ViewChild('signInBtn') signInBtn!: ElementRef;
  @ViewChild('auth') auth!: ElementRef;
  userNamePattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  loginForm = this.fb.group({
    userName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.userNamePattern),
      ]),
    ],
    password: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
  });

  account_validation_messages = {
    userName: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long',
      },
    ],
  };

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  setClassForm(type: number) {
    if (type === 1) {
      this.renderer.addClass(this.formBox.nativeElement, 'active');
      this.renderer.addClass(this.auth.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.formBox.nativeElement, 'active');
      this.renderer.removeClass(this.auth.nativeElement, 'active');
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .getLogin(this.userName.value, this.password.value)
        .then(() => {
          this.router.navigate(['/home','user']);
        })
        .catch((error) =>
          console.warn(error, ' - El usuario no esta en la base de datos')
        );
    }
  }
}
