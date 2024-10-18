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
interface Titles1{
  id: number,
  step:string,
  title: string,
  icon: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  data: Titles[] = [];
  data1: Titles1[] = [];
  constructor(private dummyData: DummydataService) {}
  ngOnInit(): void {
    this.data = this.dummyData.services.slice(0,4);
    this.data1 = this.dummyData.work;
  }

}

// export class HomeComponent implements OnInit{
//   services = data;
//   constructor(){}

//   ngOnInit(): void {}
// }
