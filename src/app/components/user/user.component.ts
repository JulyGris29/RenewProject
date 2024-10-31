import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  id: string |null = null;
  userForm: FormGroup;  

constructor (
  private userService:UserService,
  private route: ActivatedRoute, 
  private formBuilder: FormBuilder
){
  this.userForm = this.formBuilder.group({
    //documentId:['', this.id ? Validators.required : null],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
  });

}

ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.getUser()
    }
}

getUser() {
  this.userService.getUser(Number(this.id)).subscribe({
    next: response => {
      this.userForm.patchValue(response);
    },
    error: error => {
      console.error('There was an error with the GET request!', error);
    }
  });
}

updateUser() {
  const id = Number(this.id);
  const body = this.userForm.value;

  this.userService.updateUser(id, body).subscribe({
    next: response => {
      console.log('PUT request successful!', response);
    },
    error: error => {
      console.error('There was an error with the PUT request!', error);
    },
  });
}

deleteUser() {
  const userId = 1;

  this.userService.deleteUser(userId).subscribe(
    response => {
      console.log('DELETE request successful!', response);
    },
    error => {
      console.error('There was an error with the DELETE request!', error);
    }
  );
}

createUser() {
  const body = this.userForm.value;
  this.userService.createUser(body).subscribe({
    next: response => {
      console.log('POST request successful!', response);
    },
    error: error => {
      console.error('There was an error with the POST request!', error);
    }
  });
}

onSubmit() {
  if(this.id){
    this.updateUser();
  } else {
    this.createUser();
  }
}
}