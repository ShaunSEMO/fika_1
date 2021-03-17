import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    readonly APIUrl = 'http://127.0.0.1:8000/api/';
    readonly PhotoUrl = 'http://127.0.0.1:8000/media';

    constructor(private http:HttpClient) { }

    // Platforms

    getPlatforms():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl + 'platforms/');
    }
    addPlatforms(val:any){
        return this.http.get<any[]>(this.APIUrl + 'platforms/', val);
    }
    updatePlatforms(val:any){
        return this.http.get<any[]>(this.APIUrl + 'platforms/', val);
    }
    deletePlatforms(val:any){
        return this.http.get<any[]>(this.APIUrl + 'platforms/'+val);
    }

    // Routes
    
    getRoutes():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl + 'routes/');
    }
    addRoutes(val:any){
        return this.http.get<any[]>(this.APIUrl + 'routes/', val);
    }
    updateRoutes(val:any){
        return this.http.get<any[]>(this.APIUrl + 'routes/', val);
    }
    deleteRoutes(val:any){
        return this.http.get<any[]>(this.APIUrl + 'routes/'+val);
    }

    // Stops

    getStops():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl + 'stops/');
    }
    addStops(val:any){
        return this.http.get<any[]>(this.APIUrl + 'stops/', val);
    }
    updateStops(val:any){
        return this.http.get<any[]>(this.APIUrl + 'stops/', val);
    }
    deleteStops(val:any){
        return this.http.get<any[]>(this.APIUrl + 'stops/'+val);
    }
    

    // Upload Image

    UploadPhoto(val:any){
        return this.http.post(this.APIUrl+'saveFile/',val);
    }

    getAllPlatformNames():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl+'platforms/')
    }

    getAllRouteNames():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl+'routes/')
    }

    getAllStopNames():Observable<any[]>{
        return this.http.get<any[]>(this.APIUrl+'stops/')
    }
    
}