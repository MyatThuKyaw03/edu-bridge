import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html'
})
export class StudentsignupComponent {

  form:FormGroup

  constructor(builder:FormBuilder,
    private security:SecurityService,
    private router:Router) {
    this.form = builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]]
    })
  }

  signUp(){
    if(this.form.valid) {
      this.security.signUp(this.form.value).subscribe(result => this.router.navigate(['/anonymous', 'signin']))
    }

  }


}
