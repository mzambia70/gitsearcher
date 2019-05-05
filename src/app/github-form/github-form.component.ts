import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-github-form',
  templateUrl: './github-form.component.html',
  styleUrls: ['./github-form.component.css']
})
export class GithubFormComponent implements OnInit {


  username = "mzambia70";

  @Output() addUser = new EventEmitter<any>();

  submitUser() {
    this.addUser.emit(this.username);
  }



  constructor() {}


  ngOnInit() {
    this.submitUser();
  }

}
