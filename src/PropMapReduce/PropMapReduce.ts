import { Reduce } from "../Reduce/reduce";

/**
 * Clase que define la reduccion del array numerico map mediante la division de sus elementos
 */
export class PropMap extends Reduce {
    protected reduce: number;
    /**
     * Constructor de la clase PropMap
     * @param map Lista de numeros a reducir
     */
    constructor(protected map: number[]){
        super(map);
        this.reduce = 1;
    }

    /**
     * Operacion que se encarga de la reduccion de la lista por muliplicacion
     * @returns Valor numerico despues de la reduccion por multiplicacion
     */
    protected rArray(): number {
        this.map.forEach((item) => {
            this.reduce = this.reduce * item
        });
        return this.reduce
    }
}