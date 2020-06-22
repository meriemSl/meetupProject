import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpResponse} from '@angular/common/http';
import { User } from '../../../backend/model/User.js';
import { Event } from '../../../backend/model/Event.js';
import { Observable } from 'rxjs';
@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  //Variables contenant les url des api permettant de se connecter au backend
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _addevent="http://localhost:3000/api/addevent"
  private _showEvents = "http://localhost:3000/api/findAll"
  private _showEvent = "http://localhost:3000/api/find/:id"
  //hanedi 
  private _finduser = "http://localhost:3000/api2/find"
  private _updateuser = "http://localhost:3000/api2/update"
  private _updateimage = "http://localhost:3000/api2/updateimage"

  searchedevents : {} 
  search: any ;
  header = new HttpHeaders(
    {'Access-Control-Allow-Origin' : '*',
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'}
);

  addEvent(event){
  
    return this._http.post<any>(this._addevent, event)
  }
  showEvents():Observable<HttpResponse<any>>{
    
    return this._http.get<any>(this._showEvents)
  }
  showEvent():Observable<HttpResponse<any>>{
    
    return this._http.get<any>(this._showEvent)
  }
  
  
  registerUser(user:User){
    //Envoyer l'objet user vers l'url du backend
      return this._http.post<any>(this._registerUrl, user)
    }
    loginUser(user){
      return this._http.post<any>(this._loginUrl, user)
    }

    getUser(id : String){
      return this._http.get(this._finduser+'/'+id)
    }

    updateUser(user : User){
      return this._http.put(this._updateuser + `/${user._id}` , user);
  }

  searchEvent(search) 
  {
    return this._http.post<any>('http://localhost:3000/api/search', search)
  }
    
  updateImage(id : string, fd:FormData){
    return this._http.put(this._updateimage + `/` + id,fd);
}

}
