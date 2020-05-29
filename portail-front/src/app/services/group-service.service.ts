import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class GroupServiceService {

  constructor(private http: HttpClient) { }
  groups : any

  
  create(groupData): Observable<HttpResponse<any>> {
    
    return this.http
        .post<any>('http://localhost:3000/group/createGroup', groupData)
        .pipe(
            map(result => {
                return result;
            })
        );
  }
showAllGroup():Observable<HttpResponse<any>>
   {
    return this.http
           .get<any>('http://localhost:3000/group/allgroup')
           .pipe(
              map(result => {
                 this.groups = result
                 return result ;
              })
           )
    }
showOneGroup(groupId: String):Observable<HttpResponse<any>>
{
  return this.http
         .get<any>('http://localhost:3000/group/group/'+groupId)
         .pipe(
           map( result => {
             return result ;
           }) 
           )
}

}
