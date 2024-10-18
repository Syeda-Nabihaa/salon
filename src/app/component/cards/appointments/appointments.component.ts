import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
 @Input({required:true}) icon :string=''
 @Input({required:true}) step :string=''
 @Input({required:true}) service :string=''
}
