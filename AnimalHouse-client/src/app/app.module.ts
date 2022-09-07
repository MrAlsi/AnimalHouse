import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleModule, View,  WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import {} from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModel, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { GiochiComponent } from './components/BabyAnimal/giochi/giochi.component';
import { LoginComponent } from './login/login.component';
import { TitoloComponent } from './titolo/titolo.component';
import { DimenticataComponent } from './dimenticata/dimenticata.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { BabyAnimalComponent } from './components/BabyAnimal/baby-animal/baby-animal.component';
import { CuriositaComponent } from './components/BabyAnimal/curiosita/curiosita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatiUtenteComponent } from './dati-utente/dati-utente.component';
import { StoricoPrenotazioniComponent } from './storico-prenotazioni/storico-prenotazioni.component';
import { EliminaAccountComponent } from './elimina-account/elimina-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ClassificheComponent } from './components/Classifiche/classifiche/classifiche.component';

import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { QuizComponent } from './components/BabyAnimal/quiz/quiz.component';
import { AggiungiCuriositaComponent } from './components/BabyAnimal/aggiungi-curiosita/aggiungi-curiosita.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferenzeComponent } from './preferenze/preferenze.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { ProfiliComponent } from './profili/profili.component';
import { VideoSliderComponent } from './components/BabyAnimal/video-slider/video-slider.component';
import { CommonModule } from '@angular/common';
import { InserisciEmailComponent } from './inserisci-email/inserisci-email.component';
import { AppuntamentiComponent } from './appuntamenti/appuntamenti.component';
import { MemoryComponent } from './components/BabyAnimal/Memory/memory/memory.component';
import { CartaComponent } from './components/BabyAnimal/Memory/carta/carta.component';
import { MemoryBoardComponent } from './components/BabyAnimal/Memory/memory-board/memory-board.component';
import { AddProfessionistiComponent } from './add-professionisti/add-professionisti.component';
import { ProfiloProfComponent } from './profilo-prof/profilo-prof.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { ClassificheUtenteComponent } from './components/Classifiche/classifiche-utente/classifiche-utente.component';
import { PostComponent } from './components/bacheca/post/post.component';
import { HomepageComponent } from './components/bacheca/homepage/homepage.component';
import { NuovoPostComponent } from './components/bacheca/nuovo-post/nuovo-post.component';
import { PrenotaComponent } from './prenota/prenota.component';
import { ModificaComponent } from './modifica/modifica.component';
import { IndietroComponent } from './components/BabyAnimal/indietro/indietro.component';
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
    DimenticataComponent,
    NewpasswordComponent,
    BabyAnimalComponent,
    CuriositaComponent,
    DatiUtenteComponent,
    StoricoPrenotazioniComponent,
    EliminaAccountComponent,
    ResetPasswordComponent,
    ClassificheComponent,
    ProfessionistiComponent,
    UtentiComponent,
    QuizComponent,
    AggiungiCuriositaComponent,
    SafePipe,
    PageNotFoundComponent,
    PreferenzeComponent,
    PreferitiComponent,
    ProfiliComponent,
    VideoSliderComponent,
    InserisciEmailComponent,
    AppuntamentiComponent,
    MemoryComponent,
    CartaComponent,
    MemoryBoardComponent,
    AppuntamentiComponent,
    AddProfessionistiComponent,
    ProfiloProfComponent,
    PrenotazioniComponent,
    ClassificheUtenteComponent,
    NuovoPostComponent,
    PostComponent,
    NuovoPostComponent,
    PrenotaComponent,
    ModificaComponent,
    IndietroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ScheduleModule,
    DropDownListModule,
    DateTimePickerModule,
  ],
  providers: [
    CookieService,
    WeekService,
    MonthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
