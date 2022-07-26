import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() id: number = 0;
  @Input() url: string = "";
  @Input() stato: "coperta" | "scoperta" | "accoppiata" = "coperta";

  constructor() { }

  ngOnInit(): void {
    var loading: boolean = true;
    this.url
  }
}
