import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `
             <h1>This text is in parent component</h1>
             <br>
             <app-child-component [childProp]="parentProp"></app-child-component>
             `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  parentProp = 567;
  
}
