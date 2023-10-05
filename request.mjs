'use strict';


import error_message from "./invalid_data.mjs";


async function word_translation_request(data) {
	typeof(data) !== 'string' && error_message();

	const res = await fetch("https://libretranslate.com/translate", {
		method: "POST",
		body: JSON.stringify({
	  		q: data,
			source: "en",
			target: "ru"
		}),
		headers: { "Content-Type": "application/json" }
	});

	return await res.json();

}

export default word_translation_request;

