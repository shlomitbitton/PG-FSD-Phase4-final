import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'username';
  password ='';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  //Dependency Injection
  constructor(private router: Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      // redirect to the welcome page
      // this.router.navigate(['home',this.username]);
      this.router.navigate(['user']);
      this.invalidLogin = false;
    }else{
      this.invalidLogin =true;
    }
  }

}