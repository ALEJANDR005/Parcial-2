import { Component, OnInit } from '@angular/core';
import { Conferencia } from './conferencia';
import { Conferencias } from './data';
import { ConferenciaService } from './conferencia.service';

@Component({
  selector: 'app-conferencia',
  templateUrl: './conferencia.component.html',
  styleUrls: ['./conferencia.component.css']
})
  export class ConferenciaComponent implements OnInit {

  constructor( private conferenciaService: ConferenciaService) { }
  conferencia: Array<Conferencia> = [];

  getConferencias()  {
    this.conferenciaService.getConferencias().subscribe(
      (conferencia: Array<Conferencia>) => {
        this.conferencia = conferencia;
      }
    );
  }


  ngOnInit() {
    this.getConferencias();
  }

}
