import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable() // servicio
export class LoginService {
  constructor(
    private readonly _httpClient:HttpClient
  ) {}


metodoGet(url: string){
return this._httpClient.get(url);
}

metodoPost(url: string){

}

metodoPut(url: string){

}

metodoDelete(url: string){

}



}
