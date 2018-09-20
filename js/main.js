var div = `<div class="swatch"></div>`

function populatePalette(domcolor, palette) {
	var domcolor = domcolor;
	var palette = palette;

	var div = document.createElement("div")
	document.getElementById('swatchHolder').appendChild(div)
	div.classList.add('swatch')

	div.style.backgroundColor = `rgb(${domcolor[0]}, ${domcolor[1]}, ${domcolor[2]})`

	palette.forEach(function(singlePalette) {
		var div = document.createElement("div")
		document.getElementById('swatchHolder').appendChild(div)
		div.classList.add('swatch')

		div.style.backgroundColor = `rgb(${singlePalette[0]}, ${singlePalette[1]}, ${singlePalette[2]})`
	})

}

function analyseImage() {
	var colorThief = new ColorThief();
	var sourceImage = document.getElementById("test");

	var domcolor = colorThief.getColor(sourceImage)
	console.log("domcolor", domcolor);

	var palette = colorThief.getPalette(sourceImage)
	console.log("palette", palette);

	populatePalette(domcolor, palette);
}

analyseImage();


/// not used yet
function _getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
