import { Component } from '@angular/core';

@Component({ //component decorator
    selector:'sandbox',
    template:`<h1>Hello {{ name }}</h1>`
})

export class SandboxComponent{
// property
   name:string = 'Amit Mandal';
   age:number = 25;
   hasChildren:boolean = true;
   city:any = 'Stanford';
   myNumbersArray:number[] = [1,2,3];
   myStringsArray:string[] = ['hello', 'world'];
   myAnyArray:any[] = [1,2,'hello'];
   myTuple:[string, number] = ['hello', 3];
   unusable:void = undefined;
   u:undefined = undefined;
   n:null = null;

   constructor(){
       
   }
}