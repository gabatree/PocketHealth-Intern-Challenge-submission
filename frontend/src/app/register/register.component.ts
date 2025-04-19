import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  onFormSubmit(form: NgForm) {
    const name = form.value.name;
    const email = form.value.email;
    const favouriteColour = form.value.favouriteColour;
  
    this.userService.postRegister(name, email, favouriteColour).subscribe(() => {
      const user = this.userService.getUserDetails();
  
      this.router.navigate(['/home'], {
        queryParams: {
          name: user?.name,
          userId: user?.userId,
          favouriteColour: user?.favouriteColour
        }
      });
    });
  }

}
