import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      
    })
  };
   

  login(login):Observable<any>{
    
    
    // return this.http.post("http://localhost:5000/" +"Login/Authenticate",login,this.httpOptions);   
     let response = this.http.post("http://10.220.28.100:8083/pocwebapp/restservices/validateAccount/",login,this.httpOptions);      
     
     return response;
   }

   getUserDetails(userid){
    return this.http.get("http://10.220.28.100:8083/pocwebapp/api/getUser/?ssoId="+userid);
   }

}
