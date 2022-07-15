import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GiochiComponent } from './giochi/giochi.component';
import { LoginComponent } from './login/login.component';
import { TitoloComponent } from './titolo/titolo.component';
import { MemeComponent } from './meme/meme.component';
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
import { ClassificheComponent } from './classifiche/classifiche.component';

import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { QuizComponent } from './quiz/quiz.component';
import { RispostaComponent } from './risposta/risposta.component';
import { AggiungiCuriositaComponent } from './aggiungi-curiosita/aggiungi-curiosita.component';

import { CartaMemoryComponent } from './carta-memory/carta-memory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferenzeComponent } from './preferenze/preferenze.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { ProfiliComponent } from './profili/profili.component';
import { VideoSliderComponent } from './components/video-slider/video-slider.component';
import { CommonModule } from '@angular/common';
import { InserisciEmailComponent } from './inserisci-email/inserisci-email.component';

import { MemoryComponent } from './components/Memory/memory/memory.component';
import { MemoryBoardComponent } from './components/Memory/memory-board/memory-board.component';
import { MemoryCardComponent } from './components/Memory/memory-card/memory-card.component';
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
    MemeComponent,
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
    RispostaComponent,
    AggiungiCuriositaComponent,
    MemoryComponent,
    CartaMemoryComponent,
    SafePipe,
    PageNotFoundComponent,
    PreferenzeComponent,
    PreferitiComponent,
    ProfiliComponent,
    VideoSliderComponent,
    InserisciEmailComponent,
    MemoryComponent,
    MemoryBoardComponent,
    MemoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
