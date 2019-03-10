import { Injectable } from "@angular/core";
import { ButtonService } from '@ui/button';

@Injectable({
  providedIn: "root"
})
export class BitcoinMinerService {

  constructor(private buttonService: ButtonService){
    console.log(`Oh maaaaan, importing the buttonService here still worked [${buttonService instanceof ButtonService}].`);
  }

  public mine(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
