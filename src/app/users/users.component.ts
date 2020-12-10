import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private mainService:MainServiceService) { }

  ngOnInit(): void {
    this.mainService.getUserList().subscribe((res: any[]) => {
      this.users = res;
    })
  }

}
