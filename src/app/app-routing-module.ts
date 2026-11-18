import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDepartamentosComponent } from './components/home-departamentos-component/home-departamentos-component';
import { CreateDepartamentoComponent } from './components/create-departamento-component/create-departamento-component';
import { DeleteFormComponent } from './components/delete-form-component/delete-form-component';
import { DeleteRoutingComponent } from './components/delete-routing-component/delete-routing-component';
import { UpdateComponent } from './components/update-component/update-component';

const routes: Routes = [
  { path: "", component: HomeDepartamentosComponent},
  { path: "create", component: CreateDepartamentoComponent },
  { path: "deleteform", component: DeleteFormComponent},
  { path: "deleteruta/:id", component: DeleteRoutingComponent },
  { path: "update/:id", component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
