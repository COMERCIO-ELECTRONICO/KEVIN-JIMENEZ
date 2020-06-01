import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
constructor(){}

canActivate(): boolean{
    // aqui logica
    const valorLocal = localStorage.getItem('nombre')
return true;
}
}