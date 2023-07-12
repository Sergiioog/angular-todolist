import { Component } from '@angular/core';

interface Tarea {
  titulo: string;
  eliminada: boolean;
  fecha: string;
  hora: string;
  estado: string;
  infoExtra: string;
}

@Component({
  selector: 'app-tarea-principal',
  templateUrl: './tarea-principal.component.html',
  styleUrls: ['./tarea-principal.component.css']
})
export class TareaPrincipalComponent {
  tareas: Tarea[] = []; //Array de tareas
  vayaDisp: boolean = true; //display de ¡Vaya!, parece que esta muy tranquilo... para que aparezca o desaparezca cuando se metan tareas

  ponTarea() { //METODO PARA AÑADIR TAREAS
    const nuevaTarea: Tarea = {  //Tarea con sus campos
      titulo: '',
      eliminada: false,
      fecha: '',
      hora: '',
      estado: '',
      infoExtra: ''
    };
    this.tareas.push(nuevaTarea); //Enviamos la tarea a array de Tareas
    this.displayVaya(); //Llamamos al metodo que oculta la frase
  }

  eliminarTarea(tarea: Tarea) { //parameto que es la tarea a eliminar
    const indice = this.tareas.findIndex(t => t === tarea); //busca el indice de la tarea y se utiliza una funcion de comparacion que compara cada elemento del array con la tarea y devuelve el índice del primer elemento que cumple la condición. 
    if (indice !== -1) { //Si es diferente a -1, significa que la tarea se encuentra en la lista
      this.tareas.splice(indice, 1); //Elimina la tarea del array
      this.guardarLocal(); //actualiza la localStorage
    }
    this.displayVaya(); //Vuelve a salir la frase
  }

  eliminarTareas() {
    this.tareas = this.tareas.filter(tarea => !tarea.eliminada); //filter crear un array que contiene las tareas que no han sido marcadas como eliminadas 
    //Se evalua si la propieadad "eliminada" de cada tarea es false, si lo es se meten en el array
    this.guardarLocal();
    this.displayVaya();
  }

  displayVaya(): void {
    this.vayaDisp = this.tareas.length === 0; //Si this.tareas.length es igual a 0, this.vayaDisp se establecerá en true y se mostrará. De lo contrario, se establecerá en false y el mensaje se ocultará.
  }

  guardarLocal() {
    localStorage.setItem('tareas', JSON.stringify(this.tareas)); //se guarda en la local
  }

  guardarTarea(tarea: Tarea) {
    this.guardarLocal();
  }

  tareasGuardadas() {//Saca las tareas guardadas por pantalla al iniciar la ventana
    const tareasGuardadas = localStorage.getItem('tareas'); //coge las tareas guardadas
    if (tareasGuardadas) { //verifica que haya tareas
      this.tareas = JSON.parse(tareasGuardadas); //si hay se convierten a objetos
    }
    this.displayVaya();
  }
}
