/**
 * Clase abstracta que define el map y el metodo de reduccion
 */
export abstract class Reduce {
    protected reduce: number;
     /**
      * Constructor de la clase reduce
      * @param map lista de numeros a reducir
      */
    constructor(protected map: number[]){
        this.reduce = 0;
    }

    /**
     * Funcion run que define el esqueleto del algoritmo
     * @returns this.reduce (El contenido de la reduccion)
     */
    public run(){
        let aux: string = "";
        this.reduce = this.rArray();
    
        this.map.forEach((item) => {
          aux += item + " ";
        });
        console.log(`Lista a reducir: ${aux}`)
        console.log(`Resultado de la reducción: ${this.reduce.toFixed(2)}`);
        return this.reduce;
    }

    /**
     * Operacion que ha de ser implementeada por las subclases
     */
    protected abstract rArray(): number;
}