import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    teamName: new FormGroup(''),
    phone: new FormGroup(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.registerForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.registerForm.reset();
  }
}
