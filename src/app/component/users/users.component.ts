import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { User } from '../../classes/user';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  user: User[] = []   

constructor (private userService:UserService) {}

ngOnInit(): void {
    this.userList()
}

userList(){
  this.userService.getUserList().subscribe(
    data => {
      this.user=data
      console.log(this.user)
    }
  )
}

deleteUser(id:string){
  const userId =  parseFloat(id);
  this.userService.deleteUser(userId).subscribe(
    data => {
      console.log(data)
      this.userList()
    }
  )
}
}