import { Reduce } from "../Reduce/reduce";
/**
 * Clase que define la reduccion mediante la resta de los elementos del array de numeros map
 */
export class SubMap extends Reduce {
    protected reduce: number;
    /**
     * Constructor de la clase SubMap
     * @param map Lista de numeros a reducir
     */
    constructor(protected map: number []){
        super(map);
        this.reduce = 0;
    }
    /**
     * Operacion que se encarga de la reduccion mediante la resta
     * @returns Valor numerico despues de la reduccion mediante la resta
     */
    protected rArray(): number {
        this.map.forEach((item) => {
            this.reduce = this.reduce - item;
        });
        return this.reduce;
    }
}