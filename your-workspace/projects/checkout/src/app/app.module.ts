import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BitcoinMinerModule } from '@core/bitcoin-miner';
import { ButtonModule } from '@ui/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BitcoinMinerModule,
    ButtonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
