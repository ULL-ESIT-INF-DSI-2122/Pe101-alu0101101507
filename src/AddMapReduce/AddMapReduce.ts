import { Reduce } from "../Reduce/reduce";

/**
 * Clase que defina la reduccion de los elementos numericos del array map mediante la suma
 */
export class AddMap extends Reduce{
    protected reduce: number;
    /**
     * Constructor de la clase AddMap
     * @param map Lista de numeros a reducir
     */
    constructor(protected map: number[]){
        super(map);
        this.reduce = 0;
    }
    /**
     * Operacion de reduccion mediante la suma
     * @returns El valor numerico de la reduccion
    */
    protected rArray(): number {
        this.map.forEach((item) => {
            this.reduce += item;
        });
            return this.reduce        
    }
}
