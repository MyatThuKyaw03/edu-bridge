import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-teachersignup',
  templateUrl: './teachersignup.component.html',
  styles: [
  ]
})
export class TeachersignupComponent {

  form:FormGroup

  constructor(builder:FormBuilder,
    private security:SecurityService,
    private router:Router) {
    this.form = builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
      bankaccount:['',Validators.required],
      edubackground :['']

       })
  }

  teacherSignUp(){
    if(this.form.valid) {
      this.security.teacherSignUp(this.form.value).subscribe(
        result => this.router.navigate(['/anonymous', 'signin'])
      )
      console.log(this.form.value)
    }

  }




}
