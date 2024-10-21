import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primarybutton',
  templateUrl: './primarybutton.component.html',
  styleUrls: ['./primarybutton.component.css']
})
export class PrimarybuttonComponent {
  @Input({ required: true }) buttonText: string = '';
  @Input() buttonPx: string = '';
  @Input() buttonPy: string = '';
  @Input() buttonWidth: string = '';
  @Input() buttonMarginT: string = '';
  
}
