//servizio che mi serve per condividere la variabile selectedVerifica

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllaCodiceService {

  code?: any;
  selectedVerifica: boolean= false;

  constructor() { }
}
