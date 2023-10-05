import { createSocket as create_udp_socket } from "dgram";


const server = create_udp_socket("udp4");


server.on("message", (msg, info) => {
	
}
