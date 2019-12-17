import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from 'ngrx-data';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../core/model/issue';

@Injectable({ providedIn: 'root' })
export class IssueService extends EntityCollectionServiceBase<Issue> {

  private github_api = "https://api.github.com/repos/";

  constructor( 
    public http: HttpClient,
    public serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Issue', serviceElementsFactory);
  }

  public getByRepo(pRepo: string){
    return this.http.get<Issue[]>(this.github_api + pRepo + "/issues");
  }
}