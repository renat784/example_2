import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
})
export class PersonsListComponent implements OnInit {
  persons = [
    { name: 'one', age: 12, isAlive: true },
    { name: 'two', age: 22, isAlive: true },
    { name: 'three', age: 52, isAlive: true },
    { name: 'four', age: 112, isAlive: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
