// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
import { Http} from '@angular/http';
/*
  Generated class for the ChecklistServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChecklistServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ChecklistServiceProvider Provider');
  }
loginstudent(id,password){
 
  return this.http.get("http://localhost:8000/student/"+id+"/"+password).map((res)=>res.json());
  
}
loginteacher(id,password){
 
  return this.http.get("http://localhost:8000/teacher/"+id+"/"+password).map((res)=>res.json());
}
 createUser(m,id,name,fauctly,major,email,password){
   var data={ 
     student_id:id,
     student_name:m+name,
     fauctly:fauctly,
     major:major,
     email:email,
     password:password

   }
return this.http.post("http://localhost:8000/student/add",data).toPromise();
 }
}