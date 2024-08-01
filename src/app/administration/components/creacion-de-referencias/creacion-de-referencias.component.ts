import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-creacion-de-referencias',
  templateUrl: './creacion-de-referencias.component.html',
  styleUrl: './creacion-de-referencias.component.css'
})

export class CreacionDeReferenciasComponent {
  CreacionDeReferencias!: FormGroup;
  @Output()  registroCreado = new EventEmitter<any>();
  constructor  (){
    this.CreacionDeReferencias = new FormGroup({
    ref: new FormControl('',[Validators.required]),
    subarancel: new FormControl('',[Validators.required]),
    arancel: new FormControl('',[Validators.required]),
    iva: new FormControl('',[Validators.required]),
    producto: new FormControl('',[Validators.required]),
    marca: new FormControl('',[Validators.required]),
    modelo: new FormControl('',[Validators.required]),
    referencia: new FormControl('',[Validators.required]),
    serial: new FormControl('',[Validators.required]),
    usod: new FormControl('',[Validators.required]),
 })
}

ngOnInit():void{}

  onSubmit(): void {
  console.log(this.CreacionDeReferencias.value)
/*     const datos = this.registroForm.value;
    this.dataService.guardarRegistro(datos).subscribe( data=>
      console.log(data);

      this.registroCreado.emit(data);
      this.registroForm.reset(); */
    /* ) */
  }
}
