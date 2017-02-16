import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private username: string;
    private client_id = '077a41b7cd1f18c053f0';
    private client_secret = '5b1f7e02032ea0da10d6b705278e9d418dd40757';

    constructor(private _http: Http) {
        console.log('Github service Ready...');
        this.username = 'ssrtkn';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username +'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }
        getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username +'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
                .map(res => res.json());
    }
    updateUser(username:string){
        this.username= username;
    }
}