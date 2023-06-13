import { Injectable } from "@angular/core";
import { SecurityApi } from "../apis/security.api.service";

@Injectable({providedIn: 'root'})
export class SecurityService {

  constructor(private api:SecurityApi) {}

  signIn(form:any) {
    return this.api.signIn(form)
  }


  signUp(form:any){
    return this.api.signUp(form)
  }

  teacherSignUp(form:any){
    return this.api.teacherSignUp(form)
  }
}
