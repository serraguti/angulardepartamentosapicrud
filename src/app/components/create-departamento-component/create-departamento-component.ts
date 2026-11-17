import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamento-component',
  standalone: false,
  styleUrl: './create-departamento-component.css',
  templateUrl: './create-departamento-component.html',
})
export class CreateDepartamentoComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef
  mensaje!: string

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos
  ) {}

  async insertarDepartamento(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value)
    let nom = this.cajanombre.nativeElement.value
    let loc = this.cajalocalidad.nativeElement.value
    let dept = new Departamento(id, nom, loc);
    await this._service.insertDepartamento(dept);
    this.mensaje = "Departamento insertado"
    this._cdr.detectChanges()
  }
}
