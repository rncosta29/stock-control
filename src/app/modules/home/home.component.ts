import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private formBuilder: FormBuilder) { }

  loginCard =false;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmitLoginForm(): void {
    console.log('Dados do formulario de login ', this.loginForm.value);
  }

  onSubmitSignUpForm(): void {
    console.log('Dados de formulario para logar ', this.signupForm.value);
  }
}
