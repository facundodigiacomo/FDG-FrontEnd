export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    mesE : string;
    anoE : string;
    lugarE : string;

    constructor(nombreE: string, descripcionE: string, mesE: string, anoE: string, lugarE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.mesE = mesE;
        this.anoE = anoE;
        this.lugarE = lugarE;
    }
}
