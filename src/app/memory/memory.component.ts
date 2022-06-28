import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartaMemory } from './carta-memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})


export class MemoryComponent implements OnInit {
  data: CartaMemory = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  constructor() { }

  ngOnInit(): void {
  }

  
  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
