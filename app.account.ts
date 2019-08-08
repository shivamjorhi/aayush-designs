import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Account} from './account.model';
import {AccountService} from './account.service';

@Component({
    selector: 'app-acc',
    templateUrl: './account.html'
})

export class AccountComponent implements OnInit{

    accounts: Account[];
    account: Account = new Account();
    status=false;
    constructor(private router: Router, private accountService: AccountService){
    }

    ngOnInit() {
        this.accountService.getAccounts()
          .subscribe( data => {
            this.accounts = data;
          });
      };

      deleteAccount(account: Account): void {
        this.accountService.deleteAccount(account)
          .subscribe( data => {
            this.accounts = this.accounts.filter(u => u !== account);
          })

          alert("Deleted")
          this.router.navigate(['view-all']);
          window.location.reload();
      };

      editAccount(i:any):void{
        this.status=true
        this.account.aid=this.accounts[i].aid;
        this.account.mobile=this.accounts[i].mobile;
        this.account.accountholder=this.accounts[i].accountholder;
        this.account.balance=this.accounts[i].balance;

      }

      updateAccount(){
        this.accountService.updateAccount(this.account,this.account.mobile).subscribe(
          data=>{
            console.log("updated")
            
          }
        )
        alert("Updated")
        this.router.navigate(['view-all']);
        window.location.reload();
      }

}