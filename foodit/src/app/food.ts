import { Url } from 'url';
import { Route } from '@angular/compiler/src/core';
import { Source } from 'webpack-sources';
import { UrlMatcher } from '@angular/router';
import { DecimalPipe } from '@angular/common';

export class Food {
    id: number;
    name: string;
    price: number;
    image: HTMLImageElement;
}
