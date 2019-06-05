import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GridData} from './DTO/grid-data';
import {WordList} from './DTO/word-list';

@Injectable({
  providedIn: 'root'
})
export class BoggleResolverService {



  private PORT: number = 80;
  private HOST: string = '192.168.0.155';
  private PROTOOL: string = 'http';

  constructor(private httpClient: HttpClient) { }

  public postGrid(gridData: GridData): Promise<WordList> {
    return this.httpClient.post<WordList>(`${this.PROTOOL}://${this.HOST}:${this.PORT}/boggle`, gridData).toPromise();
  }
}
