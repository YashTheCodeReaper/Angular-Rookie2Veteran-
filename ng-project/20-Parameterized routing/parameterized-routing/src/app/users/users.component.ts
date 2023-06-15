import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: 'Jimmy' },
    { id: 2, name: 'Charles' },
    { id: 3, name: 'Howard' },
    { id: 4, name: 'Kim' },
    { id: 5, name: 'Mike' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
