import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface viaCepprops {
  bairro: string;
  cep: string;
  logradouro: string;
  localidade: string;
  uf: string;
  ibge: string;
}
@Injectable({ providedIn: 'root' })
export class ViaCep {
  constructor(private http: HttpClient) {}

  public getCep(cep: string): Observable<viaCepprops> {
    return this.http.get<viaCepprops>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
