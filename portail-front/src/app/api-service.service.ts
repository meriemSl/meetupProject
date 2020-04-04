import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User } from 'C:/Users/Asus/Desktop//meetupProject/backend/model/User.js';
import { Event } from 'C:/Users/Asus/Desktop//meetupProject/backend/model/Event.js';
@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  //Variables contenant les url des api permettant de se connecter au backend
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _addevent="http://localhost:3000/api/addevent"
  header = new HttpHeaders(
    {'Access-Control-Allow-Origin' : '*',
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'}
);

  addEvent(event:Event){
  
    return this._http.post<any>(this._addevent, event)
  }
  registerUser(user:User){
    //Envoyer l'objet user vers l'url du backend
      return this._http.post<any>(this._registerUrl, user)
    }
    loginUser(user){
      return this._http.post<any>(this._loginUrl, user)
    }
  }
