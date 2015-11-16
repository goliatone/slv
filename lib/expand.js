/*
 * expand
 * https://github.com/goliatone/expand
 *
 * Copyright (c) 2015 goliatone
 * Licensed under the MIT license.
 */

'use strict';


var cons = require('consolidate'),
    extend = require('gextend');

var defaults = {
    engine: 'swig',
    options: {
        varControls: ['${', '}']
    },
    configure: function(engine, options){
        engine.setDefaults(options);
    }
};


/**
 * Exports module
 */
module.exports = function(options){
    options = extend({}, defaults, options);

    try {
        require(options.engine);
        // options.configure(engine, options.options);
    } catch(e){
        console.log('error', e);
        console.log('Engine not found. Try executing npm:');
        console.log('npm i --save %s', options.engine);
        return;
    }

    var engine = cons[options.engine];

    return engine( options.template, options.context)
        .then(function(html){
            console.log(html);
        })
        .catch(function(err){
            console.log(err);
        });
};
