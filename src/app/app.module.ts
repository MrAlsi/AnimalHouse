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
    MemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
