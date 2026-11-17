import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';

@Component({
  selector: 'app-delete-form-component',
  standalone: false,
  styleUrl: './delete-form-component.css',
  templateUrl: './delete-form-component.html',
})
export class DeleteFormComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  mensaje!: string

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamentos
  ){}

  async eliminarDepartamento(): Promise<void> {
    let id = parseInt(this.cajaid.nativeElement.value);
    await this._service.deleteDepartamento(id);
    this.mensaje = "Departamento eliminado: " + id;
    this._cdr.detectChanges()
  }
}
