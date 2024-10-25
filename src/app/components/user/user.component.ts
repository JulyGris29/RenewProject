import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../classes/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  user: User[] = []   

constructor (private userService:UserService) {}

ngOnInit(): void {
    this.user
}

userList(){
  this.userService.getUserList().subscribe(
    data => {
      this.user = data
      console.log(this.user)
    }
  )
}

}