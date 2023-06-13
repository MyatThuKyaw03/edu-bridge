import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/services/security/security.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [],
})
export class SigninComponent {
  form: FormGroup;

  constructor(
    builder: FormBuilder,
    private security: SecurityService,
    private router: Router
  ) {
    this.form = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(4)]],
    });
  }

  signIn() {
    if(this.form.valid) {
      // this.security.signIn(this.form.value).subscribe(result => {
      //   if(result) {
      //     this.router.navigate(['/studenthome', result.role.toLocaleLowerCase() ])
      //   }
     //  })
     this.security.signIn(this.form.value).subscribe(arr => {
        if(arr.length) {
          if(arr[0])
            this.router.navigate(['/teacher', 'courselist'])
        }
     })
    }
  }
}
