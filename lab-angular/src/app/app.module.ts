import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContadorComponent } from './contador/contador.component';
import { CardComponent } from './card/card.component';
import { FormReativoComponent } from './form-reativo/form-reativo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

19:56

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'

Pressione Shift + Tab para acessar o histórico do bate-papo. 

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    ContadorComponent,
    CardComponent,
    FormReativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
