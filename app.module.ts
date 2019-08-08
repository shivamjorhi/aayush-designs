import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import {AccountComponent} from './app.account';
import {AddAccountComponent} from './add-account';
import {FindAccountComponent} from './app.findaccount';
import {DepositeComponent} from './Services/deposite';
import {WithdrawComponent} from './Services/withdraw';
import {TransferComponent} from './Services/transfer';
import {RouterModule, Routes} from '@angular/router'; 
import {FormsModule} from '@angular/forms';
import {AccountService} from './account.service';
import {HttpClientModule} from '@angular/common/http';



const routes: Routes = [
    { path: 'view-all', component: AccountComponent},
    { path: 'new', component: AddAccountComponent},
    { path: 'find', component: FindAccountComponent},
    { path: 'deposite', component: DepositeComponent},
    { path: 'withdraw', component: WithdrawComponent},
    { path: 'transfer', component: TransferComponent}
];

@NgModule({
    imports: [
        BrowserModule, RouterModule.forRoot(routes),FormsModule,HttpClientModule
        
    ],

    declarations: [
        AppComponent,AccountComponent,AddAccountComponent,FindAccountComponent, DepositeComponent, WithdrawComponent, TransferComponent
		],
    providers: [ AccountService ],
    bootstrap: [AppComponent]
})

export class AppModule { }