import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../medicamento.service';
import { faPlus, faEdit, faTrash, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from '../utils.service';
import { Medicamento } from '../medicamento';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash;  
  faSave = faSave; faTimesCircle = faTimesCircle;

  editingResident : Medicamento;
  editingIndex : number;
  editing : boolean = false;
  adding: boolean = false;
  residents : Medicamento[];
  constructor(private moradorService : MedicamentoService,
              private utils : UtilsService) { }

  ngOnInit() {
    this.getResidents();
    this.resetUpdate();
  }

  resetUpdate() {
    this.editingResident = {nome_comercial : '', nome_quimico : '', quantidade_minima: 0, unidade_de_medida: '',  tipo_embalagem: '', id : ''};
    this.editing = false;
    this.editingIndex = -1;
  }

  getResidents() {
    this.moradorService.getResidents().subscribe(
      residents => {
        this.residents = residents;
        console.log(this.residents);
      }
    );
  }

  startUpdate(i : number) {
    this.editingResident = this.utils.deepCopy(this.residents[i]); 
    console.log(this.editingResident);
    this.editingIndex = i;
    this.editing = true;
  }

  updateResident() {
    console.log(this.editingResident);
    this.moradorService.updateResident(this.editingResident)
      .subscribe(
        status => {
          this.residents[this.editingIndex] = this.editingResident;
          this.resetUpdate();
        }
      );
  }

  deleteResident(i: number) {
    this.moradorService.deleteResident(this.residents[i]).subscribe(
      status => {
        this.residents.splice(i, 1);
      }
    );
  }

  initAddResident() {
    this.resetUpdate();
    this.adding = true;
  }

  resetAdd() {
    this.resetUpdate();
    this.adding = false;
  }

  saveResident() {
    this.moradorService.saveResident(this.editingResident).subscribe(
      m => {
        this.residents.push(<Medicamento> m);
        this.resetAdd();
      }
    );
  }

}
