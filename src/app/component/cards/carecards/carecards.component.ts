import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carecards',
  templateUrl: './carecards.component.html',
  styleUrls: ['./carecards.component.css']
})
export class CarecardsComponent {
  @Input({required:true}) icon:string=''
  @Input({required:true}) title:string=''
  @Input({required:true}) detail:string=''
}
