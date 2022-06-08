import { Component, OnInit, Input } from '@angular/core';
import { Medicamento } from '../../medicamento';

@Component({
  selector: 'app-material-row',
  templateUrl: './medicamento-row.component.html',
  styleUrls: ['./medicamento-row.component.css']
})
export class MedicamentoRowComponent implements OnInit {
  @Input() medicamento: Medicamento;
  
  constructor() { }

  ngOnInit() {
  }

}
