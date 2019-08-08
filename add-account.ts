import {Component} from '@angular/core';
import {Router} from '@angular/router';

import { Account } from './account.model';
import {AccountService} from './account.service';

@Component({
    templateUrl: './add-acc.html'
})

export class AddAccountComponent{

    account: Account = new Account();
    constructor(private router: Router, private accountService: AccountService){

    }
    createAccount():void{
        this.accountService.createAccount(this.account).subscribe();
        this.router.navigate(['view-all']);

    };
}