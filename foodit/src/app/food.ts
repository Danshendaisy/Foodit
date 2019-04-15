import { Url } from 'url';
import { Route } from '@angular/compiler/src/core';
import { Source } from 'webpack-sources';
import { UrlMatcher } from '@angular/router';

export class Food {
    id: number;
    name: string;
    description: string;
    price:number;
    quantity:number;
    image: HTMLImageElement;
    seller:string;
    quantityAvaliable:number;
}
