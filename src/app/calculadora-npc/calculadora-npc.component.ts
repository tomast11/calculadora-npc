import { Component, OnInit } from '@angular/core';
import { Criatura } from '../Criatura'
import { Nivel } from '../Nivel'
import { Validators } from '@angular/forms'

import { CriaturaService } from '../criatura.service'
import { NivelesService} from '../niveles.service'
import { MessageService } from '../message.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculadora-npc',
  templateUrl: './calculadora-npc.component.html',
  styleUrls: ['./calculadora-npc.component.css']
})
export class CalculadoraNpcComponent implements OnInit {

  criaturas: Criatura[];
  niveles: Nivel[];
  selectedCriatura: Criatura;
  nivel: number;
  porcentaje: number;
  resultado: number;
  private subscriptions: Subscription[] = [];

  constructor(private criaturaService:CriaturaService, private nivelesService:NivelesService) { }

  ngOnInit(): void {
    this.getCriaturas();
    this.getNiveles();
  }

  getCriaturas(): void{
    this.subscriptions.push(
                  this.criaturaService.getCriaturas()
                      .subscribe(criaturas => this.criaturas = criaturas))
  }

  getNiveles(): void {
    this.subscriptions.push(
                  this.nivelesService.getNiveles()
                      .subscribe(niveles => this.niveles = niveles))
  }

  calcular():void{
    if ( this.nivel > this.selectedCriatura.nivel ) { var exp = this.selectedCriatura.exp * 0.25} else { var exp = this.selectedCriatura.exp}
    this.resultado = ((this.niveles[this.nivel-1].exp - ((this.niveles[this.nivel-1].exp * this.porcentaje) / 100) ) / exp)
  }

  ngOnDestroy() {
    this.subscriptions.forEach (subscriptions => subscriptions.unsubscribe());    
  }
}