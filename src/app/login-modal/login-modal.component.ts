import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})


export class LoginModalComponent implements OnInit {

 
  errorValue:string;
  message:string;
  uid:string;
  userType:string;
  status:number;

 constructor(private modalService: NgbModal,private loginService:LoginService, private authService:AuthService,private route:Router) {}

  ngOnInit() {
  }
  

  //={"message":string,"status":number,"uid":string,"userType":string};
  error:String;
login(username,psd)
{
  
  let login={"ssoId":username,"password":psd}; 
    this.loginService.login(login).subscribe(response=>{
      console.log(response);
      this.message=response.message;
      this.status=response.status;
      this.uid=response.uid;
      this.userType= response.userType;
      
        });
        
     
      if(this.status==400)
     {
       this.errorValue="*Please enter the correct username and password"
       document.getElementById("username").value = "";
       document.getElementById("password").value = ""; 
       
     }

     if(this.status==200)
     {
      this.errorValue="";
       alert(this.uid);
       this.authService.setToken(this.uid); 
      document.getElementById('id01').style.display='none';
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
       
     }

}


   openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  
}
