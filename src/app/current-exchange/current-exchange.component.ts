import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-exchange',
  templateUrl: './current-exchange.component.html',
  styleUrls: ['./current-exchange.component.css']
})
export class CurrentExchangeComponent {

  @Input() countryCodes: string[] = [];
  @Input() exchangedAmount: number = 0;

  // ngOnChanges(changes: SimpleChanges) {
  //   for (let propName in changes) {
  //     if (propName === 'countryCodes') {
  //          this.countryCodes = cloneDeep(changes[propName].currentValue);
  //          console.log("HERE");
  //         console.log(this.countryCodes); 
  //     }
  //    }
  // }

}
