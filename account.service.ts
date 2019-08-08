import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Account} from './account.model';


const httpOptions={
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable()
export class AccountService{
    constructor(private http:HttpClient){}

    private userUrl='http://localhost:1887/wallet';

    public createAccount(account){
        return this.http.post<Account>(this.userUrl + "/create", account);
    }

    public getAccounts() {
        return this.http.get<Account[]>(this.userUrl + "/view-all");
    }

    public deleteAccount(account) {
        return this.http.delete(this.userUrl + "/delete/"+ account.mobile);
    }

    public getAccountByMobile(mobile: number) {
        console.log(mobile)
        return this.http.get<Account[]>(this.userUrl + "/view/"+mobile);
    }

    public updateAccount(account,mobile){
        return this.http.put(this.userUrl + "/update/" +account.mobile,account);
    }

    public depositeAccount(mobile,amount){
        return this.http.put(this.userUrl + "/services/deposite/" +mobile+ "/" +amount,mobile,amount);
    }

    public withdrawMoney(mobile,amount){
        return this.http.put(this.userUrl + "/services/withdraw/" +mobile+ "/" +amount,mobile,amount);
    }

    public transferMoney(from,to,amount){
        return this.http.put(this.userUrl + "/services/transfer/" +from+ "/" +to+ "/" +amount,from,to);
    }



}