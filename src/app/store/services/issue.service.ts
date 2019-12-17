import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Issue } from 'src/app/core/model/issue';

@Injectable()
export class IssueService{

    private github_api = "https://api.github.com/repos/";

    constructor(private http: HttpClient){}

    public getIssueList(repo: String) : Observable<Object>{
        return this.http.get<Issue[]>(this.github_api + repo + "/issues");
    }
}