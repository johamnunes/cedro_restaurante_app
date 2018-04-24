import { Injectable } from "@angular/core";
import {Http, Headers, RequestOptions} from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { CEDRO_API } from './app.api';
import { ErrorHandler } from './app.error-handler'

@Injectable()
export class CedroService<T>{
    constructor(private http: Http){}

    getAll(controller: string) : Observable<T[]> {
        return this.http.get(CEDRO_API + controller)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);        
    }

    getById(controller: string, id: string) : Observable<T> {
        return this.http.get(CEDRO_API + controller + '/' + id)
        .map(response => response.json())
        .catch(ErrorHandler.handleError); 
    }

    add(controller: string, obj: T) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(CEDRO_API + controller, JSON.stringify(obj), new RequestOptions({headers: headers}))
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    edit(controller: string, id: string, obj: T) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.put(CEDRO_API + controller + '/' + id, JSON.stringify(obj), new RequestOptions({headers: headers}))
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    delete(controller: string, id: string) {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        
        return this.http.delete(CEDRO_API + controller + '/' + id, new RequestOptions({headers: headers}))
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}