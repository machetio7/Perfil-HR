import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

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
