const assert = require('assert');
//const Money = require('./Models/money'); npm install -g mocha
/*
describe("Cadenas",function(){
    describe("subcadenas",function(){
       it('deberia retornar una sub cadenas',function(){
       assert.equal("Bello","Panama es Bello".substring(10,15));
       })
    })
    });*/
describe('venta en papeleria',function(){

        var hojas,lapices,plumas;
        
        beforeEach(function(){
           hojas = 4;
           lapices = 2;
           plumas = 8;
        });
        
        describe('operaciones basicas 1',function(){
           it('suma',function(){
           assert.equal(a + b,2);
           });
           
           it('resta',function(){
           assert.equal(a - b,5);
           });
           it('division',function(){
            assert.equal(a / b,7);
            });
            
            it('multiplicacion',function(){
            assert.equal(a * b,8);
            });
            it.only('multi',function(){
               assert.equal(Math.pow(4,2),16);
               });
            
            it('raiz cuadrada',function(){
               assert.equal(Math.sqrt(16),4);
               });
               
               it.only('exponentes',function(){
               assert.equal(Math.pow(4,2),16);
               });
            });
});