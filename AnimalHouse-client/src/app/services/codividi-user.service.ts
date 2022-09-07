//servizio che mi serve per condividere la variabile username con compoenet inserisci-email e newpassword
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodividiUserService {

  username?: string;
  constructor() { }
}
