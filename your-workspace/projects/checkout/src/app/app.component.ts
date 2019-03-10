import { Component } from '@angular/core';
import { BitcoinMinerService } from '@core/bitcoin-miner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private bitcoinMinerService: BitcoinMinerService){ }

  private token: string;

  public get bitcoinToken(){
    return this.token;
  } 

  public getCash(){
    return this.token = this.bitcoinMinerService.mine();
  }
}
