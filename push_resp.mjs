'use strict';


import { createSocket as create_udp_socket } from "dgram";

import error_message from "./invalid_data.mjs";


const host = "127.0.0.1";
const port = 12500;


function sendUDP(str) {
    typeof(str) !== 'string' && error_message();

    const msg = Buffer.from(str);

    const client = create_udp_socket('udp4');
    
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

