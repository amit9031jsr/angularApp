import { Component } from '@angular/core';

@Component({ //component decorator
    selector:'sandbox',
    template:`
        <h1>Hello World</h1>
        {{ people }}
        <ul>
            <li *ngFor="let person of people">
            {{ person }}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people; let i = index">
            {{ i + 1 }} {{ person }}
            </li>
        </ul>
        <ul>
            <li *ngFor="let person of people2">
            {{ person.firstName }} {{ person.lastName }}
            </li>
        </ul>
    `
})

export class SandboxComponent{
// property
    people = ['Amit', 'Suraj', 'Ravi', 'Krishna']
    people2 = [
        {
            firstName:'Amit',
            lastName:'Mandal'
        },
        {
            firstName:'Suraj',
            lastName:'Kumar'
        },
        {
            firstName:'Ravi',
            lastName:'Srivastav'
        },
        {
            firstName:'Krishna',
            lastName:'Das'
        }
    ];

    constructor(){
        this.people[2] = 'Reshav';
    }
}

