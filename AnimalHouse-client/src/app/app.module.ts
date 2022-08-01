import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleModule, View,  WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
//import {} from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { GiochiComponent } from './giochi/giochi.component';
import { LoginComponent } from './login/login.component';
import { TitoloComponent } from './titolo/titolo.component';
import { DimenticataComponent } from './dimenticata/dimenticata.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { BabyAnimalComponent } from './baby-animal/baby-animal.component';
import { CuriositaComponent } from './curiosita/curiosita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatiUtenteComponent } from './dati-utente/dati-utente.component';
import { StatisticheUtenteComponent } from './statistiche-utente/statistiche-utente.component';
import { StoricoPrenotazioniComponent } from './storico-prenotazioni/storico-prenotazioni.component';
import { EliminaAccountComponent } from './elimina-account/elimina-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ClassificheComponent } from './components/Classifiche/classifiche/classifiche.component';

import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { QuizComponent } from './quiz/quiz.component';
import { AggiungiCuriositaComponent } from './aggiungi-curiosita/aggiungi-curiosita.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferenzeComponent } from './preferenze/preferenze.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { ProfiliComponent } from './profili/profili.component';
import { VideoSliderComponent } from './components/Meme/video-slider/video-slider.component';
import { MemeComponent } from './components/Meme/meme/meme.component';
import { CommonModule } from '@angular/common';
import { InserisciEmailComponent } from './inserisci-email/inserisci-email.component';
import { AppuntamentiComponent } from './appuntamenti/appuntamenti.component';
import { MemoryComponent } from './components/Memory/memory/memory.component';
import { CartaComponent } from './components/Memory/carta/carta.component';
import { MemoryBoardComponent } from './components/Memory/memory-board/memory-board.component';
import { AddProfessionistiComponent } from './add-professionisti/add-professionisti.component';
import { ProfiloProfComponent } from './profilo-prof/profilo-prof.component';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
import { ClassificheUtenteComponent } from './classifiche-utente/classifiche-utente.component';
import { PostComponent } from './components/bacheca/post/post.component';
import { HomepageComponent } from './components/bacheca/homepage/homepage.component';
import { NuovoPostComponent } from './components/bacheca/nuovo-post/nuovo-post.component';
import { ClassificaQuizComponent } from './components/Classifiche/classifica-quiz/classifica-quiz.component';
import { ClassificaMemoryComponent } from './components/Classifiche/classifica-memory/classifica-memory.component';
import { PrenotaComponent } from './prenota/prenota.component';
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
    StatisticheUtenteComponent,
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
    MemeComponent,
    ClassificaQuizComponent,
    ClassificaMemoryComponent,
    PrenotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    ScheduleModule
  ],
  providers: [
    CookieService,
    WeekService,
    MonthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
