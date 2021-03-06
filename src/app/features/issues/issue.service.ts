import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

import { HttpClient } from '@angular/common/http';
import { Issue } from '../../core/model/issue';
import { GITHUB_API } from './issue.constants';

@Injectable({ providedIn: 'root' })
export class IssueService extends EntityCollectionServiceBase<Issue> {

  constructor( 
    public http: HttpClient,
    public serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Issue', serviceElementsFactory);
  }

  public getByRepo(pRepo: string){
    return this.http.get<Issue[]>(GITHUB_API + pRepo + '/issues');
  }
}