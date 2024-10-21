import { Component } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';

interface Titles1{
  id: number,
  title: string,
  icon: string,
  detail:string
}
@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.css']
})
export class CareComponent {
  care: Titles1[] = [];
  constructor(private dummyData: DummydataService) {}
  ngOnInit(): void {
    this.care = this.dummyData.care;
 
}
}