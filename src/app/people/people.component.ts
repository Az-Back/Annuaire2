import { Component, OnInit, Input } from '@angular/core';
import { People } from '../models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  @Input() people!: People;
  constructor() { }
  image1!: string;
  image2!: string;
  image3!: string;
  ngOnInit(): void {
    this.image1 = '../../assets/rookie.svg';
    this.image2 = '../../assets/advance.svg';
    this.image3 = '../../assets/expert.svg';
  }

}
