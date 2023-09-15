'use strict';


import * as dgram from "dgram";

import error_message from "./invalid_data.mjs";


function sendUDP(str) {
    typeof(str) !== 'string' && error_message();

    const msg = Buffer.from(str);
    const host = "127.0.0.1";
    const port = 12000;

    const client = dgram.createSocket('udp4');
    
    client.send(
        msg,
        port,
        host,
        function (err) {
            if (err) {
                client.close();
                console.log(`ERROR: ${err}`);
            }
        
        }
    )
    
    client.unref();
    
}


export default sendUDP;
