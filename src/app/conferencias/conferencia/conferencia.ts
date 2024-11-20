import { Component } from '@angular/core';



export class Conferencia {
    constructor(
        public id: number,
        public name: string,
        public starts: string,
        public ends: string,
        public description: string
    ) { 
        this.id = id;
        this.name = name;
        this.starts = starts;
        this.ends = ends;
    }
}
