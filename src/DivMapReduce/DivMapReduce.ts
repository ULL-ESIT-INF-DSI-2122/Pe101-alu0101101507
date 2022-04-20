import { Reduce} from "../Reduce/reduce";

/**
 * Clase que define la reduccion de el aray numerico map mediante la suma de sus elementos
 */
export class DivMap extends Reduce {
    protected reduce: number;
    /**
     * Constructor de la clase DivMap
     * @param map lista de numeros enteros a reduci
     */
    constructor(protected map: number[]){
        super(map);
        this.reduce = 1;
    }
    /**
     * Operacion que realiza la reduccion mediante la division
     * @returns El valor numerico despues de la reduccion por division
     */
    protected rArray(): number {
        this.map.forEach((item) => {
           this.reduce = this.reduce / item;
        });
        return this.reduce
    }
}