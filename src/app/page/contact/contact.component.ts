import { Component } from '@angular/core';
import { DummydataService } from 'src/app/services/dummydata.service';
interface values {
  id: number;
  type: string;
  icon: string;
  text: string;
  description: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  data: values[] = [];
  constructor(private dummyData: DummydataService) {}
  ngOnInit(): void {
    this.data = this.dummyData.contact;
  }
}
