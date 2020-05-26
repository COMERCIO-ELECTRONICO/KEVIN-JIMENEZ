import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor() { }
  nombre1 = '';
  nombre2 = '';
  apellido1 = '';
  apellido2 = '';
  email = '';
  telefono = '';
  pass = '';
  confimarPassword = '';

  ngOnInit(): void {
  }

}
