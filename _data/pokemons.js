const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    let promises = [];
	try {
        for(let i = 1; i <= 150; i++) {
            let url = "https://pokeapi.co/api/v2/pokemon/" + i;
            promises.push(EleventyFetch(url, {
                duration: "1w",
                type: "json"
            }));
        }

        return Promise.all(promises).then((results) => {
            results;
            return results;
        });

        /* This returns a promise */
	} catch(e) {
		return {
			// my failure fallback data
		}
	}
};