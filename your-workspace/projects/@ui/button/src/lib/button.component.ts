import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button (onclick)="click.emit()">{{label}}</button>
  `,
  styles: [`
    button{
      color: white;
      border: 0;
      height: 48px;
      padding: 0 30px;
      background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
      box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
      border-radius: 3px;
    }
  `],
  encapsulation: ViewEncapsulation.Native,
})
export class ButtonComponent{
  @Input()
  public label: string;

  @Output()
  public click = new EventEmitter();
}
