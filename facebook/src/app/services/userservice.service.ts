import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  url='http://localhost:8080/api/Registration/';
  constructor(private http:HttpClient) { }
  enroll(user :User){
 return this.http.post<any>(this.url,user);
  }
  emailCheck(email:any)
  {
    return this.http.get<any[]>(this.url+email);
  }
}
