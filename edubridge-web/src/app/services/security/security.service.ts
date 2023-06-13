import { Injectable } from "@angular/core";
import { SecurityApi } from "../apis/security.api.service";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class SecurityService {

  private _users:any[] = []
  private _teacher:any[]=[]

  constructor(private api:SecurityApi) {}

  signIn(form:any) {
    return of(this._users.filter(user => user.email == form.email && user.password == form.password),
    (this._teacher.filter(teacher=> teacher.email==form.email && teacher.password==form.password)))

  }


  signUp(form:any){
    this._users.push(form)
    return of(this._users)
  }

  teacherSignUp(form:any){
    this._teacher.push(form)
    return of(this._teacher)
  }
}
