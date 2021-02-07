import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private stringLocatiion: string;
  private _longitude: string;
  private _latitude: string;

  constructor() { }

  set longitude(stringLocation: string){
    
  }

  set latitude(stringLocation: string){
    
  }

  get longitude(){
    return this._longitude;
  }

  get latitude(){
    return this._latitude;
  }
}
