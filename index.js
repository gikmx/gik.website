'use strict';

const PATH = require('path');
const Feliz = require('feliz');
const Preset = require('feliz.preset-npw');
const Package = require('./package.json');

const preset$ = Preset({
    plugins: { deps: Package.dependencies },
    config : { root: PATH.join(__dirname, 'app') }
});

const feliz$ = preset$.switchMap(preset => Feliz(preset));

feliz$.subscribe(
    feliz => {
        console.log(feliz.server.info)
    },
    error => console.error(error)
);
