import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimenticata',
  templateUrl: './dimenticata.component.html',
  styleUrls: ['./dimenticata.component.css']
})
export class DimenticataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedVerifica: boolean= false;
  Verifica(): void{
    this.selectedVerifica= true;
  }

}
