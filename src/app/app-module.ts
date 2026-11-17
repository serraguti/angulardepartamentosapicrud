import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { HomeDepartamentosComponent } from './components/home-departamentos-component/home-departamentos-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceDepartamentos } from './services/service.departamentos';
import { CreateDepartamentoComponent } from './components/create-departamento-component/create-departamento-component';
import { DeleteFormComponent } from './components/delete-form-component/delete-form-component';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    HomeDepartamentosComponent,
    CreateDepartamentoComponent,
    DeleteFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
