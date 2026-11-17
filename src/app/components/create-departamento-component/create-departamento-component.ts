import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';

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

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos
  ) {}

  async insertarDepartamento(): Promise<void> {

  }
}
