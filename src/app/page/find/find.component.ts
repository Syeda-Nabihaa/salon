import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DummydataService } from 'src/app/services/dummydata.service';


interface Titles {
  id: number;
  name: string;
  owner_name: string;
  state: string;
  city: string;
  address: string;
  experience: string;
  img_url: string;
}

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  data:Titles[] = [];
  constructor(private dummyData:DummydataService){}
  ngOnInit(): void {
    this.data = this.dummyData.services;
  }

}
