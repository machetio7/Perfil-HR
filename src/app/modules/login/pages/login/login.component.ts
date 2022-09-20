import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formBox') formBox!: ElementRef;
  @ViewChild('signUpBtn') signUpBtn!: ElementRef;
  @ViewChild('signInBtn') signInBtn!: ElementRef;
  @ViewChild('auth') auth!: ElementRef;

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
  userNamePattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  loginForm = this.fb.group({
    userName: ['', Validators.compose([Validators.required, Validators.pattern(this.userNamePattern)])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
  });

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  get userName(): FormControl {
    return this.loginForm.get('userName') as FormControl;
  }

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

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
      this.router.navigate(['/home']);
    }
  }
}
