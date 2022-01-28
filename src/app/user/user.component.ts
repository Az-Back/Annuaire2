import { Component, OnInit, Input } from '@angular/core';
import { People } from '../models/people';
import Json from '../../assets/liste.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  list: People[] = Json.results as any;

  under40!: People[];
  in40and60!: People[];
  more60!: People[];
  @Input() people!: People[];

  constructor() { }

  ngOnInit(): void {
    this.under40 = this.list.filter((People) => People.dob.age <= 40);
    this.in40and60 = this.list.filter(
      (People) => People.dob.age > 40 && People.dob.age <= 60
    );
    this.more60 = this.list.filter((People) => People.dob.age > 60);
    
    this.list[0];
  }

}
