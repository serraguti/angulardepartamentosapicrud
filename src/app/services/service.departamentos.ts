import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceDepartamentos {
    constructor(
        private _http: HttpClient
    ) {}

    async getDepartamentosAsync(): Promise<Departamento[]> {
        let request = "api/departamentos"
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.get<Departamento[]>(url)
        )
    }
    
    async insertDepartamento(departamento: Departamento): Promise<any> {
        let request = "api/departamentos"
        let url = environment.apiejemplos + request
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.post(url, departamento, {headers: header})
        )
    }

    async updateDepartamento(departamento: Departamento): Promise<any> {
        let request = "api/departamentos"
        let url = environment.apiejemplos + request;
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            this._http.put(url, departamento, {headers: header})
        )
    }

    async deleteDepartamento(id: number): Promise<any> {
        let request = "api/departamentos/" + id;
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.delete(url)
        )
    }
}