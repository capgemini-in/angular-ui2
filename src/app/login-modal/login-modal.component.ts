import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {


  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

login(username,psd)
{
 
 
  alert(username+"This is password also"+"...................."+psd);
  
}

   openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
