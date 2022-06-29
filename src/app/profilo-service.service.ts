import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfiloServiceService {

  constructor (private router: Router) {}
  //variabili per gestire la visualizzazioni delle card nel profilo
  selectedPrenotazioni:boolean= false;
  selectedStatistiche: boolean= false;
  selectedDati: boolean=false;
  selectedElimina: boolean=false;

  
  showDati(): void{
    this.selectedDati=true;
    this.selectedPrenotazioni=false;
    this.selectedStatistiche=false;
    this.selectedElimina=false;
  }

  showStatistiche(): void{
    this.selectedStatistiche=true;
    this.selectedDati=false;
    this.selectedPrenotazioni=false;
    this.selectedElimina=false;
  }

  showPrenotazioni(): void{
    this.selectedDati=false;
    this.selectedPrenotazioni=true;
    this.selectedStatistiche=false;
    this.selectedElimina=false;
  }

  showElimina() :void{
    this.selectedElimina=true;
    this.selectedDati=false;
    this.selectedPrenotazioni=false;
    this.selectedStatistiche=false;
  }

  close(): void{
    this.selectedElimina=false;
  }


  eliminaAccount(): void{
    //@todo eliminare veramente l'account adesso reindirizza solo alla prima pagina
    this.router.navigate(['']);
  }

}
