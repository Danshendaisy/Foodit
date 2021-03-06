import { Url } from 'url';
import { Route } from '@angular/compiler/src/core';
import { Source } from 'webpack-sources';
import { UrlMatcher } from '@angular/router';

export class Food {
    id: number;
    seller: string;
    name: string;
    price:number;   
    quantity:number;
    description: string;
    placeToMeet: string;
    image: string;
}
