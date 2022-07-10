import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MangiaBiscottoService } from './mangia-biscotto.service';


@Injectable({
  providedIn: 'root'
})
export class ProfiloServiceService {
  
  id?: string;
  constructor (private router: Router, public http: HttpClient, public biscotto: MangiaBiscottoService) {}
  //variabili per gestire la visualizzazioni delle card nel profilo
  selectedPrenotazioni:boolean= false;
  selectedStatistiche: boolean= false;
  selectedDati: boolean=false;
  selectedElimina: boolean=false;
  selectedReset: boolean=false;
  selectedNewPassword: boolean= false;

  
  showDati(): void{
    this.selectedDati=true;
    this.selectedPrenotazioni=false;
    this.selectedStatistiche=false;
    this.selectedElimina=false;
    this.selectedReset=false;
    this.selectedNewPassword= false;


  }

  showStatistiche(): void{
    this.selectedStatistiche=true;
    this.selectedDati=false;
    this.selectedPrenotazioni=false;
    this.selectedElimina=false;
    this.selectedReset=false;
    this.selectedNewPassword= false;

  }

  showPrenotazioni(): void{
    this.selectedDati=false;
    this.selectedPrenotazioni=true;
    this.selectedStatistiche=false;
    this.selectedElimina=false;
    this.selectedReset=false;
    this.selectedNewPassword= false;


  }

  showElimina() :void{
    this.selectedElimina=true;
    this.selectedDati=false;
    this.selectedPrenotazioni=false;
    this.selectedStatistiche=false;
    this.selectedReset=false;
    this.selectedNewPassword= false;
  }

  close(): void{
    this.selectedElimina=false;
    this.selectedNewPassword= false;

  }

  reset(): void{
    this.selectedReset=true;
    this.selectedDati=false;
    this.selectedNewPassword= false;

  }

  
  eliminaAccount(): void{
      this.id=this.biscotto.getId();
      console.log("id:", this.id);
      this.http.delete<any>('http://localhost:3000/CRUD/utenti/'+this.id)
      .subscribe(data => {
        //this.collezioni=data;
        console.log(data);
        this.router.navigate(['']);
      });
      
  }

}
