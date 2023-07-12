import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.css']
})
export class MenuOpcionesComponent {
  documentacion(): void {
    const link = document.createElement('a');
    link.href = 'assets/doc/documentacion.pdf';
    link.download = 'documentacion.pdf';
    link.click();
  }
}
