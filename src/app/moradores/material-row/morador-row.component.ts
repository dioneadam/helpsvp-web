import { Component, OnInit, Input } from '@angular/core';
import { Morador } from '../../morador';

@Component({
  selector: 'app-material-row',
  templateUrl: './morador-row.component.html',
  styleUrls: ['./morador-row.component.css']
})
export class MoradorRowComponent implements OnInit {
  @Input() morador: Morador;
  
  constructor() { }

  ngOnInit() {
  }

}
