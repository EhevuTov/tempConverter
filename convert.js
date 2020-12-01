#!/usr/bin/env node

var arg = require( 'commander' );


function f2c( f ) {
  return 5/9*(f-32)
}

function c2f( c ) {
  return 9/5*c+32
}

arg
  .version( '0.0.2' ) 
  .usage( "<conversion> <temperature>" )

// a new block for each function
arg
  .command('c2f <temp>')
  .description('convert Celsius to Fehrenheit')
  .action(function(temp){
    console.log(c2f(temp));
  });
arg
  .command('f2c <temp>')
  .description('convert Fehrenheit to Celsius')
  .action(function(temp){
    console.log(f2c(temp));
  });

arg.parse(process.argv)
