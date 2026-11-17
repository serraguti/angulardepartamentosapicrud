import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-delete-routing-component',
  standalone: false,
  styleUrl: './delete-routing-component.css',
  templateUrl: './delete-routing-component.html',
})
export class DeleteRoutingComponent implements OnInit {
  mensaje!: string

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe((params: Params) => {
      let id = params['id']
      this.mensaje = "Dato recibido: " + id;
      this._cdr.detectChanges();
    })
  }
}
