import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username:null,
    //email:null,
    password:null,
  }
  ldata:any;
  token:any;
  error:any=false;
  next_url:any;

  constructor(public http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    console.log(this.user);
    var users={
      username:null,
      password:null,
      name:"kap"
    }
    users.username = this.user.username;
    users.password = this.user.password;
    console.log(users);
    this.http.post("https://demo.credy.in/api/v1/usermodule/login/", users).subscribe(data => {
    this.ldata=data;
      console.log(this.ldata);
      if(this.ldata.is_success==true)
    {
      this.error = false;
      this.token = this.ldata.data.token;
      console.log(this.token);
      this.next_url="\flist";
      this.route.navigateByUrl(this.route.url+"/flist");
    }
    this.error = true;
    });
    if(this.ldata.is_success==true)
    {
      this.next_url="\flist";
      this.route.navigateByUrl(this.route.url+"/flist");
    }

  }


}
