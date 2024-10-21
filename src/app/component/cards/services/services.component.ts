import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  @Input ({required:true}) image:string=''
  @Input ({required:true}) title:string=''
  @Input ({required:true}) name:string=''
  @Input ({required:true}) year:string=''
  @Input ({required:true}) description:string=''

  actionOne(param: string) {
    console.log('Button clicked with param:', param);

    // Add your custom logic here for the first button
  }
}
