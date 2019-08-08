import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Account} from './account.model';
import {AccountService} from './account.service';



@Component({
    selector: 'find-acc',
    templateUrl: './find-account.html'
})

export class FindAccountComponent{
    accounts:Account[]
    status:boolean=false;
    mobile:number;
    constructor(private router: Router, private accountService: AccountService){}
    

    public searchAccount() {
        this.status=true;
        this.accountService.getAccountByMobile(this.mobile)
          .subscribe(accounts => this.accounts = accounts);
    }
    
    public reset(){
        this.router.navigate(['find']);
    }
  /*  onSubmit() {
    
        this.searchAccount();
    }*/
}