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
  registerUser(user:User){
    //Envoyer l'objet user vers l'url du backend
      return this._http.post<any>(this._registerUrl, user)
    }
    loginUser(user){
      return this._http.post<any>(this._loginUrl, user)
    }
  }
