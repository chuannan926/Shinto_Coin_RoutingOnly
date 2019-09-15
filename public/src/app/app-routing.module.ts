import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { MinecoinsComponent} from './minecoins/minecoins.component';
import { BuyComponent} from './buy/buy.component';
import { SellComponent} from './sell/sell.component';
import { LedgerComponent } from './ledger/ledger.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'buy', component:BuyComponent},
  { path: 'home', component:HomeComponent},
  { path: 'ledgr', component:LedgerComponent},
  { path: 'minecoins', component: MinecoinsComponent},
  { path: 'sell', component:SellComponent},
  { path: 'transaction/:id', component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
