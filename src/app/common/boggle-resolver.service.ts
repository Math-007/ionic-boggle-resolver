import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridData} from './http/grid-data';
import {WordList} from './http/word-list';

@Injectable({
  providedIn: 'root'
})
export class BoggleResolverService {

  constructor(private httpClient: HttpClient) { }

  public postGrid(gridData: GridData): Promise<WordList> {
    return this.httpClient.post<WordList>('http://144.172.153.80:4000/boggle', gridData).toPromise();
  }
}
