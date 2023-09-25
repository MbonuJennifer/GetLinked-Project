import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GetLinkedService } from 'src/app/Service/get-linked.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup = new FormGroup({
    teamName: new FormGroup(''),
    phone: new FormGroup(''),
    email: new FormGroup(''),
    topic: new FormGroup(''),
    category: new FormGroup(''),
    size: new FormGroup(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: GetLinkedService
  ) {}

  categories: any[] = [];
  sizes: number[] = Array.from({ length: 25 }, (_, i) => i + 1);

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      teamName: ['', Validators.required],
      topic: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(13),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required]],
      size: ['', [Validators.required]],
      acceptTerms: [false, Validators.requiredTrue],
    });

    // this.service.getCategories().subscribe((data: any) => {
    //   this.categories = data.categories;
    //   this.registerForm.controls['category'].setValue('');
    // });
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

  changeCategory(e: any) {
    this['category']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  changeSize(e: any) {
    this['size']?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

}
