import { ViaCep, viaCepprops } from './api/via-cep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private viaCep: ViaCep) {}
  public dadosCep!: viaCepprops;

  ngOnInit(): void {}

  buscarDados() {
    this.viaCep.getCep('63113640').subscribe((resposta) => {
      console.log(resposta);
      this.dadosCep = resposta;
    });
  }
}
