import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoginUser } from "../dto/login-user";
import { StudentSignUp } from "../dto/signup-student";
import { TeacherSignUp } from "../dto/signup-teacher";

@Injectable({providedIn: 'any'})
export class SecurityApi {

  signIn(form:any):Observable<LoginUser> {
    return of({
      name: form.name,
      email: form.email,
      password: form.password
    })
  }

  signUp(form:any):Observable<StudentSignUp>{
    return of({
      name:form.name,
      email:form.email,
      password:form.password
     })
  }

  teacherSignUp(form:any):Observable<TeacherSignUp>{
    return of({
      name:form.name,
      email:form.email,
      password:form.password,
      bankaccount:form.bankaccount,
      edubackground:form.edubackground
     })
  }


  }

