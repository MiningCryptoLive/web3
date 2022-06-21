
fetch("https://erg.miningcrypto.live/api/pools/ergo/blocks")
  .then((response) => {
    if (response.ok) {
	return response.json();
	} else {
	throw new Error("NETWORK RESPONSE ERROR");
	}
	})
	.then(data => {
	console.log(data);
	displaypoolBlocks(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));

	function poolBlocks(data) {
	const poolBlocks = data.poolBlocks[0];
	const poolBlocksDiv = document.getElementById("poolBlocks");
	...
	}
