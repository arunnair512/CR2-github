import { Component, Input } from '@angular/core';
import { Provider } from '../../providers/service';
@Component({
  selector: 'data-item',
  templateUrl: './data-item.component.html',
  styleUrls: ['./data-item.component.scss']
})
export class ItemComponent {

  @Input() data: any;
  @Input() avgScore1:any;
  constructor(private provider: Provider) {
   
  }




}
