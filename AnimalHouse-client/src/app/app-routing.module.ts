import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyAnimalComponent } from './baby-animal/baby-animal.component';
import { CuriositaComponent } from './curiosita/curiosita.component';
import { GiochiComponent } from './giochi/giochi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemeComponent } from './meme/meme.component';
import { PrimaComponent } from './prima/prima.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ClassificheComponent } from './classifiche/classifiche.component';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { AggiungiCuriositaComponent } from './aggiungi-curiosita/aggiungi-curiosita.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PreferenzeComponent } from './preferenze/preferenze.component';
import { ProfiliComponent } from './profili/profili.component';
import { GuardiaIdService } from './guardia.service';
import { GuardiaRuoloService } from './guardia-ruolo.service';
import { AddProfessionistiComponent } from './add-professionisti/add-professionisti.component';

const routes: Routes = [
  {path: '', component: PrimaComponent},
  {path: 'homepage', component: HomepageComponent, canActivate :[GuardiaIdService]},
  {path: 'signup', component: RegistrazioneComponent},
  {path: 'signupAdmin', component: RegistrazioneAdminComponent},
  {path: 'babyanimal', component: BabyAnimalComponent},
  {path: 'babyanimal/games', component: GiochiComponent},
  {path: 'babyanimal/meme', component: MemeComponent},
  {path: 'babyanimal/curiosity', component: CuriositaComponent},
  {path: 'babyanimal/curiosity/addCuriosity', component: AggiungiCuriositaComponent, canActivate :[GuardiaRuoloService]},
  {path: 'classifiche', component: ClassificheComponent, canActivate :[GuardiaIdService]},
  {path: 'newProfessionisti', component: AddProfessionistiComponent, canActivate :[GuardiaRuoloService]},
  {path: 'professionisti', component: ProfessionistiComponent, canActivate :[GuardiaRuoloService]},
  {path: 'utenti', component: UtentiComponent, canActivate :[GuardiaIdService]},
  {path: 'preferenze', component: PreferenzeComponent},
  {path: 'profili/:username', component: ProfiliComponent, canActivate :[GuardiaIdService]},
  {path: '**', component: PageNotFoundComponent } //deve essere l'ultimo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
