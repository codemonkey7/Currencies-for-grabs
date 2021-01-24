import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-exchange',
  templateUrl: './all-exchange.component.html',
  styleUrls: ['./all-exchange.component.css']
})
export class AllExchangeComponent {
  @Input() rates!: any;

}
