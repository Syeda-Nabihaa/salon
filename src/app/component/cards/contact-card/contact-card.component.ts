import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
@Input ({required:true}) icon:string=''
@Input ({required:true}) Location:string=''
@Input ({required:true}) address:string=''
}
