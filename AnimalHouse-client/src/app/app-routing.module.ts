import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyAnimalComponent } from './components/BabyAnimal/baby-animal/baby-animal.component';
import { CuriositaComponent } from './components/BabyAnimal/curiosita/curiosita.component';
import { GiochiComponent } from './components/BabyAnimal/giochi/giochi.component';
import { HomepageComponent } from './components/bacheca/homepage/homepage.component';
import { PrimaComponent } from './components/Navbar/prima/prima.component';
import { RegistrazioneAdminComponent } from './components/registrazione-admin/registrazione-admin.component';
import { RegistrazioneComponent } from './components/Account/registrazione/registrazione.component';
import { ClassificheComponent } from './components/Classifiche/classifiche/classifiche.component';
import { ProfessionistiComponent } from './components/Professionisti/professionisti/professionisti.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { AggiungiCuriositaComponent } from './components/BabyAnimal/aggiungi-curiosita/aggiungi-curiosita.component';
import { PageNotFoundComponent } from './components/Navbar/page-not-found/page-not-found.component';
import { PreferenzeComponent } from './components/Account/preferenze/preferenze.component';
import { ProfiliComponent } from './components/Account/profili/profili.component';
import { GuardiaIdService } from './services/guardia.service';
import { GuardiaRuoloService } from './services/guardia-ruolo.service';
import { AddProfessionistiComponent } from './components/Professionisti/add-professionisti/add-professionisti.component';
import { ProfiloProfComponent } from './components/Professionisti/profilo-prof/profilo-prof.component';
import { PrenotazioniComponent } from './components/Professionisti/prenotazioni/prenotazioni.component';
import { ModificaComponent } from './components/Account/modifica/modifica.component';
import { GuardiaUtenteService } from './services/guardia-utente.service';
import { VideoSliderComponent } from './components/BabyAnimal/video-slider/video-slider.component';

const routes: Routes = [
  {path: '', component: PrimaComponent},
  {path: 'homepage', component: HomepageComponent, canActivate :[GuardiaIdService]},
  {path: 'signup', component: RegistrazioneComponent},
  {path: 'signupAdmin', component: RegistrazioneAdminComponent},
  {path: 'babyanimal', component: BabyAnimalComponent},
  {path: 'babyanimal/games', component: GiochiComponent},
  {path: 'babyanimal/curiosity', component: CuriositaComponent},
  {path: 'babyanimal/curiosity/addCuriosity', component: AggiungiCuriositaComponent, canActivate :[GuardiaRuoloService]},
  {path: 'babyanimal/meme', component: VideoSliderComponent},
  {path: 'classifiche', component: ClassificheComponent, canActivate :[GuardiaIdService]},
  {path: 'newProfessionisti', component: AddProfessionistiComponent, canActivate :[GuardiaRuoloService]},
  {path: 'professionisti', component: ProfessionistiComponent, canActivate :[GuardiaRuoloService]},
  {path: 'utenti', component: UtentiComponent, canActivate :[GuardiaIdService]},
  {path: 'preferenze', component: PreferenzeComponent},
  {path: 'profili/:username', component: ProfiliComponent, canActivate :[GuardiaIdService]},
  {path: 'professionista/:nome', component: ProfiloProfComponent, canActivate :[GuardiaIdService]},
  {path: 'prenotazioni', component: PrenotazioniComponent, canActivate:[GuardiaUtenteService]},
  {path: 'modifica/:id/:appuntamento', component: ModificaComponent, canActivate:[GuardiaIdService]},

  {path: '**', component: PageNotFoundComponent } //deve essere l'ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
