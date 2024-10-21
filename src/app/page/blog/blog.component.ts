import { Component } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';

interface blog{
  id: number;
  title:string;
  img:string;
  description:string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  data:blog[]=[];
  constructor(private dummyData:DummydataService) {}
  ngOnInit():void{
    this.data = this.dummyData.blog;
  }

}
