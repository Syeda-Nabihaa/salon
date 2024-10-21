import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carecards',
  templateUrl: './carecards.component.html',
  styleUrls: ['./carecards.component.css']
})
export class CarecardsComponent {
  @Input() icon:string=''
  @Input() title:string=''
  @Input() detail:string=''
}
