import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import localePTBR from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { fakeBackendProvider } from './fake-backend-interceptor';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent, MessageToast } from './messages/messages.component';

import { MoradorService } from './morador.service';
import { MoradoresComponent } from './moradores/moradores.component';
import { MoradorRowComponent } from './moradores/material-row/morador-row.component';

import { MedicamentoService } from './medicamento.service';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { MedicamentoRowComponent } from './medicamentos/material-row/medicamento-row.component';

registerLocaleData(localePTBR);

@NgModule({
  declarations: [
    AppComponent,
    MoradoresComponent,
    MedicamentosComponent,
    MessagesComponent,
    MessageToast,
    MoradorRowComponent,
    MedicamentoRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    FontAwesomeModule,
    MatAutocompleteModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MoradorService,
    MedicamentoService,
    fakeBackendProvider
  ],
  entryComponents : [
    MessageToast
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
