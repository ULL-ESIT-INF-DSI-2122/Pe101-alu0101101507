import 'chai';
import {expect} from 'chai';
import { Reduce } from '../src/Reduce/reduce';
import { AddMap } from '../src/AddMapReduce/AddMapReduce';
import { SubMap } from '../src/SubMapReduce/SubMapReduce';
import { DivMap } from '../src/DivMapReduce/DivMapReduce';
import { PropMap } from '../src/PropMapReduce/PropMapReduce';

let addmap = new AddMap([1,2,3]);
let submap = new SubMap([1,2,3]);
let divmap = new DivMap([1,2,3]);
let propmap = new PropMap([1,2,3]);

describe('Pruebas de la clase AddMap', () => {
    it('Existe AddMap', () => {
    expect(addmap).to.be.instanceof(Reduce);
    });
    it('Reduce AddMap', () => {
    expect(addmap.run()).to.be.eql(6);
    });
});
describe('Pruebas de la clase SubMap', () => {
    it('Existe SubMap', () => {
    expect(submap).to.be.instanceof(Reduce);
    });
    it('Reduce SubMap', () => {
    expect(submap.run()).to.be.eql(-6);
    });
});
describe('Pruebas de la clase DivMap', () => {
    it('Existe DivMap', () => {
    expect(divmap).to.be.instanceof(Reduce);
    });
    it('Reduce DivMap', () => {
    expect(divmap.run()).to.be.eql(0.16666666666666666);
    });
});
describe('Pruebas de la clase PropMap', () => {
    it('Existe PropMap', () => {
    expect(propmap).to.be.instanceof(Reduce);
    });
    it('Reduce PropMap', () => {
    expect(propmap.run()).to.be.eql(6);
    });
});