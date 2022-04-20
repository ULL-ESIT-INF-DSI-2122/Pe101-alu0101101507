import { Reduce } from "../Reduce/reduce";
import { AddMap } from "../AddMapReduce/AddMapReduce";
import { SubMap } from "../SubMapReduce/SubMapReduce";
import { PropMap } from "../PropMapReduce/PropMapReduce";
import { DivMap } from "../DivMapReduce/DivMapReduce";

/**
 * Codigo del cliente para realizar la reuccion con la manera que desee
 * @param reduce  Objeto con el que el cliente quiera reducir la lista de numeros
 */
function cliente(reduce: Reduce){
    reduce.run();
}

cliente(new AddMap([1,2,3]))
cliente(new SubMap([4,5,6]))
cliente(new PropMap([7,8,9]))
cliente(new DivMap([10,11,12]))