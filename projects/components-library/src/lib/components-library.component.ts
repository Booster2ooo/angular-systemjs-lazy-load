import { 
  Component, 
  EventEmitter, 
  Input, 
  OnChanges, 
  OnInit, 
  Output, 
  SimpleChanges,
  ɵdetectChanges as detectChanges
} from '@angular/core';

@Component({
  selector: 'lib-components-greeter',
  template: `
    <p>
      Hello {{ name }}!
    </p>
  `,
  styles: [
  ]
})
export class ComponentsLibraryComponent implements OnInit, OnChanges {

  private _name: string = 'stranger';
  @Input() 
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    detectChanges(this);
  }
  @Output() greeted = new EventEmitter<string>();
  
  ngOnInit(): void {
    this.greeted.next(this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
	console.log(changes)
    this.greeted.next(this.name);
  }

}
