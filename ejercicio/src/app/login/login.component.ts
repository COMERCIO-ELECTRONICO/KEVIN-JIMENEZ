import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.service';
import { HijoInterface } from '../interfaces/hijo.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales
  email = '';
  pass = '';

  correo = '';

  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['kevin', 'cachetes', 'orlando'];

  valorSeleecionado;

  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService
  ) {}

  ngOnInit(): void {
    this._loginService
      .metodoGet('http://localhost:1337/usuario')
      .subscribe((resultadoMetodoGet) => {
        console.log('Respuest de Get');
        console.log(resultadoMetodoGet);
      });
  }

  seteoValorSeleccionado(eventoSeleecionado) {
    console.log(eventoSeleecionado);
    this.valorSeleecionado = eventoSeleecionado;
  }

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['kevin', 'cachetes', 'orlando'];
    }
  }

  ingresar() {
    this._loginService
      .crearCredenciales({
        nombre: 'kevin',
        correo: this.email,
        edad: 25,
        esCasado: false,
        contrasenio: this.pass,
      })
      .subscribe((registroCreado: any) => {
        console.log('registroCreado');
        console.log(registroCreado);
        const hijo: HijoInterface = {
          nombre: 'kevin',
          id: 1,
        }
        hijo.idPadre = registroCreado.id


      });

    if (this.pass === '1234') {
      alert(this.email);
      if (this.valorSeleecionado === 'kevin') {
        alert('es estudiante');

        this._router.navigate(['/estudiante', 'perfil']);
        // localhost:9000/estudiante/perfil
      }
    } else {
      alert('no ingreso');
    }
  }

  eliminarRegitroPorId() {
    this._loginService
      .metodoPut(`http://localhost:1337/usuario/${1}`, {
        correo: this.email,
      })
      .subscribe((respuestDelete) => {
        console.log(' repuesta de Put');
        console.log(respuestDelete);
      });
  }
}
