import { Component, OnInit } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';
// import { data } from '../../constants/index.js'

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: Titles[] = [];
  constructor(private dummyData: DummydataService) {}
  ngOnInit(): void {
    this.data = this.dummyData.services.slice(0,4);
  }

}
  
// export class HomeComponent implements OnInit{
//   services = data;
//   constructor(){}

//   ngOnInit(): void {}
// }
