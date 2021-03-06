import { Component, OnInit } from '@angular/core';
import { MoradorService } from '../morador.service';
import { faPlus, faEdit, faTrash, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { UtilsService } from '../utils.service';
import { Morador } from '../morador';

@Component({
  selector: 'app-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent implements OnInit {
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash;  
  faSave = faSave; faTimesCircle = faTimesCircle;

  editingResident : Morador;
  editingIndex : number;
  editing : boolean = false;
  adding: boolean = false;
  residents : Morador[];
  constructor(private moradorService : MoradorService,
              private utils : UtilsService) { }

  ngOnInit() {
    this.getResidents();
    this.resetUpdate();
  }

  resetUpdate() {
    this.editingResident = {nome : '', cpf : '', dataNascimento: '', contatoEmergencia: '', dataEntrada: '', id : ''};
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
        this.residents.push(<Morador> m);
        this.resetAdd();
      }
    );
  }

}
