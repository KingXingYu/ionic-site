import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/lists/multiline/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class MultilinePage {
    constructor() {

    }
}
