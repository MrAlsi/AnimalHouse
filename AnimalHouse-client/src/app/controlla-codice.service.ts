import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllaCodiceService {

  code?: any;
  selectedVerifica: boolean= false;

  constructor() { }
}
