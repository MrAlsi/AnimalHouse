import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MangiaBiscottoService } from '../mangia-biscotto.service';


@Component({
  selector: 'app-professionisti',
  templateUrl: './professionisti.component.html',
  styleUrls: ['./professionisti.component.css']
})
export class ProfessionistiComponent implements OnInit {
  form: FormGroup;

  on?: string;
  dom?: string;
  professionista?: string; //variabile per sapere che tipo di professionista sto creando
  constructor(public fb: FormBuilder, private router: Router, public biscotto: MangiaBiscottoService) { 
    this.form = fb.group({
      "nome": ['',Validators.required],
      "città": ['',Validators.required],
      "via": ['',Validators.required],
      "civico": ['',Validators.required],
      "servizio": ['',Validators.required],
      "online": [this.on],
      "domicilio": [this.dom],
      "tipo": [this.professionista]
      //disponibilità?
    });
  }

  ngOnInit(): void {
    this.biscotto.getRuolo();
  }


  //metodo per prendere dal radio la tipologia di professionista
  checked(prof: string): void{
    this.professionista=prof;
    console.log(this.professionista);
  }

  salva(): void{
    if(!this.form.valid){
      alert("dati mancati");
      return;
    }else{
      if(this.on!=undefined && this.dom!=undefined){
        alert("aggiunto professionista con successo");
        //@todo aggiungerlo veramente al db
        this.router.navigate(['newProfessionisti']);//perché non si refresha la pagina?
      }else{
        alert("compilare tutti i campi");
        return;
      }
    }
  }

  //metodo per prendere il valore del radio per sapere se il professionista offre servizi a domicilio
  domicilio(radio: string): void{
    this.dom=radio;
    console.log(this.dom)
  }


  //metodo per prendere il valore del radio per sapere se il professionista offre servizi online
  online(radio: string): void{
    this.on=radio;
  }

}
