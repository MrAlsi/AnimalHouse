import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BabyAnimalComponent } from './baby-animal/baby-animal.component';
import { CuriositaComponent } from './curiosita/curiosita.component';
import { GiochiComponent } from './giochi/giochi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MemeComponent } from './meme/meme.component';
import { MemoryComponent } from './memory/memory.component';
import { PrimaComponent } from './prima/prima.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { RegistrazioneAdminComponent } from './registrazione-admin/registrazione-admin.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ClassificheComponent } from './classifiche/classifiche.component';
import { ProfessionistiComponent } from './professionisti/professionisti.component';
import { UtentiComponent } from './utenti/utenti.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path: '', component: PrimaComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'signup', component: RegistrazioneComponent},
  {path: 'signupAdmin', component: RegistrazioneAdminComponent},
  {path: 'games', component: GiochiComponent},
  {path: 'games/memory', component: MemoryComponent},
  {path: 'games/quiz', component: QuizComponent}, 
  {path: 'meme', component: MemeComponent},
  {path: 'babyanimal', component: BabyAnimalComponent},
  {path: 'curiosity', component: CuriositaComponent},
  {path: 'profilo',component: ProfiloComponent}, //ci sarà poi da aggiungere l'id
  {path: 'classifiche', component: ClassificheComponent},
  {path: 'newProfessionisti', component: ProfessionistiComponent},
  {path: 'utenti', component: UtentiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
