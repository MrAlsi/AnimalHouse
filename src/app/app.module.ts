import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GiochiComponent } from './giochi/giochi.component';
import { LoginComponent } from './login/login.component';
import { TitoloComponent } from './titolo/titolo.component';
import { CartaComponent } from './carta/carta.component';
import { GiocoComponent } from './gioco/gioco.component';
import { MemoryComponent } from './memory/memory.component';
import { CardMemoryComponent } from './card-memory/card-memory.component';
import { MemeComponent } from './meme/meme.component';
import { DimenticataComponent } from './dimenticata/dimenticata.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { BabyAnimalComponent } from './baby-animal/baby-animal.component';
import { CuriositaComponent } from './curiosita/curiosita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfiloComponent } from './profilo/profilo.component';
import { DatiUtenteComponent } from './dati-utente/dati-utente.component';
import { StatisticheUtenteComponent } from './statistiche-utente/statistiche-utente.component';
import { StoricoPrenotazioniComponent } from './storico-prenotazioni/storico-prenotazioni.component';
import { EliminaAccountComponent } from './elimina-account/elimina-account.component';

import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrazioneComponent,
    PrimaComponent,
    RegistrazioneAdminComponent,
    HomepageComponent,
    GiochiComponent,
    LoginComponent,
    TitoloComponent,
    CartaComponent,
    GiocoComponent,
    MemoryComponent,
    CardMemoryComponent,
    MemeComponent,
    DimenticataComponent,
    NewpasswordComponent,
    BabyAnimalComponent,
    CuriositaComponent,
    ProfiloComponent,
    DatiUtenteComponent,
    StatisticheUtenteComponent,
    StoricoPrenotazioniComponent,
    EliminaAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
