import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  // @Input ({required:true}) icon:string=''
  // @Input ({required:true}) count:string=''
  // @Input ({required:true}) title:string=''

  @Input ({required:true}) icon:string=''
  @Input ({required:true}) count:string=''
  @Input ({required:true}) title:string=''
}
