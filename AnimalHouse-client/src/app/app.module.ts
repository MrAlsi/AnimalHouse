import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScheduleModule, View,  WeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import {} from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModel, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SafePipe } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar/navbar.component';
import { RegistrazioneComponent } from './components/Account/registrazione/registrazione.component';
import { PrimaComponent } from './components/Navbar/prima/prima.component';
import { RegistrazioneAdminComponent } from './components/registrazione-admin/registrazione-admin.component';
import { GiochiComponent } from './components/BabyAnimal/giochi/giochi.component';
import { LoginComponent } from './components/login/login.component';
import { TitoloComponent } from './components/Navbar/titolo/titolo.component';
import { DimenticataComponent } from './components/Account/dimenticata/dimenticata.component';
import { NewpasswordComponent } from './components/Account/newpassword/newpassword.component';
import { BabyAnimalComponent } from './components/BabyAnimal/baby-animal/baby-animal.component';
import { CuriositaComponent } from './components/BabyAnimal/curiosita/curiosita.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatiUtenteComponent } from './components/Account/dati-utente/dati-utente.component';
import { EliminaAccountComponent } from './components/Account/elimina-account/elimina-account.component';
import { ResetPasswordComponent } from './components/Account/reset-password/reset-password.component';
import { ClassificheComponent } from './components/Classifiche/classifiche/classifiche.component';

import { HttpClientModule} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { ProfessionistiComponent } from './components/Professionisti/professionisti/professionisti.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { QuizComponent } from './components/BabyAnimal/quiz/quiz.component';
import { AggiungiCuriositaComponent } from './components/BabyAnimal/aggiungi-curiosita/aggiungi-curiosita.component';

import { PageNotFoundComponent } from './components/Navbar/page-not-found/page-not-found.component';
import { PreferenzeComponent } from './components/Account/preferenze/preferenze.component';
import { PreferitiComponent } from './components/Account/preferiti/preferiti.component';
import { ProfiliComponent } from './components/Account/profili/profili.component';
import { VideoSliderComponent } from './components/BabyAnimal/video-slider/video-slider.component';
import { CommonModule } from '@angular/common';
import { InserisciEmailComponent } from './components/Account/inserisci-email/inserisci-email.component';
import { AppuntamentiComponent } from './components/Professionisti/appuntamenti/appuntamenti.component';
import { MemoryComponent } from './components/BabyAnimal/Memory/memory/memory.component';
import { CartaComponent } from './components/BabyAnimal/Memory/carta/carta.component';
import { MemoryBoardComponent } from './components/BabyAnimal/Memory/memory-board/memory-board.component';
import { AddProfessionistiComponent } from './components/Professionisti/add-professionisti/add-professionisti.component';
import { ProfiloProfComponent } from './components/Professionisti/profilo-prof/profilo-prof.component';
import { PrenotazioniComponent } from './components/Professionisti/prenotazioni/prenotazioni.component';
import { ClassificheUtenteComponent } from './components/Classifiche/classifiche-utente/classifiche-utente.component';
import { PostComponent } from './components/bacheca/post/post.component';
import { HomepageComponent } from './components/bacheca/homepage/homepage.component';
import { NuovoPostComponent } from './components/bacheca/nuovo-post/nuovo-post.component';
import { PrenotaComponent } from './components/Professionisti/prenota/prenota.component';
import { ModificaComponent } from './components/Account/modifica/modifica.component';
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
