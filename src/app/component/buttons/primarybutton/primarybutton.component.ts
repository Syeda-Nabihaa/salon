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
  @Input() onClick?: (param: any) => void;

  // Adjust handleClick to allow passing a parameter
  handleClick() {
    const param = 'some value';  // Define the parameter you want to pass
    if (this.onClick) {
      this.onClick(param);  // Pass the parameter to the onClick function
    }
  }
}
