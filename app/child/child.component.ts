import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h1>The number {{childProp}} from parent displayed in child component</h1>`,
  styleUrls: ['child.component.css']

})
export class ChildComponent {
  
  @Input() childProp;
  
}
