import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeFactsService {

constructor(private http: HttpClient) { }

endpointURL: string = 'https://anime-facts-rest-api.herokuapp.com/api/v1/'

searchAnime(name: string, id:string): Observable<any> {
  return this.http.get<any>(this.endpointURL + name + `/${id}`)
}

}
