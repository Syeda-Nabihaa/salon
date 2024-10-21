import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css']
})
export class BlogCardsComponent {
  @Input ({required:true}) img:string=''
  @Input ({required:true}) title:string=''
  @Input ({required:true}) detail:string=''

}
