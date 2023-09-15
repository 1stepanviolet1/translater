'use strict';


import * as readline from "readline";

import error_message from './invalid_data.mjs';
import sendUDP from "push_resp.mjs";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
});


let data;

rl.prompt();
rl.on('line', (input) => {
    typeof(input) !== 'string' && error_message();

    data = input;
    rl.close();

});


const res = await fetch("https://libretranslate.com/translate", {
  method: "POST",
  body: JSON.stringify({
    q: data,
    source: "en",
    target: "es"
  }),
  headers: { "Content-Type": "application/json" }
});


sendUDP(JSON.stringify(
    await res.json()
));
