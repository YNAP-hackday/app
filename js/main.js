var urlArr = [
	"img/0.jpg",
	"img/1.jpg",
	"img/2.jpg",
	"img/3.jpg",
	"img/4.jpg",
	"img/5.jpg",
	"img/6.jpg",
	"img/7.jpg",
]

/////////////////////
// Button clicking //
/////////////////////

// Setup image buttons
document.getElementById('leftButton').addEventListener('click', leftClick);
// Setup image buttons
document.getElementById('rightButton').addEventListener('click', rightClick);

function leftClick() {
	var img = document.getElementById("productImage").src;

	console.log(img)
	if ( img.includes(urlArr[0]) ) {
		document.getElementById("productImage").src = urlArr[7];
	} else if ( img.includes(urlArr[1]) ) {
		document.getElementById("productImage").src = urlArr[0];
	} else if ( img.includes(urlArr[2]) ) {
		document.getElementById("productImage").src = urlArr[1];
	} else if ( img.includes(urlArr[3]) ) {
		document.getElementById("productImage").src = urlArr[2];
	} else if ( img.includes(urlArr[4]) ) {
		document.getElementById("productImage").src = urlArr[3];
	} else if ( img.includes(urlArr[5]) ) {
		document.getElementById("productImage").src = urlArr[4];
	} else if ( img.includes(urlArr[6]) ) {
		document.getElementById("productImage").src = urlArr[5];
	} else if ( img.includes(urlArr[7]) ) {
		document.getElementById("productImage").src = urlArr[6];
	}

	setTimeout(analyseImage, 100);
}

function rightClick() {
	var img = document.getElementById("productImage").src;

	console.log(img)
	if ( img.includes(urlArr[0]) ) {
		document.getElementById("productImage").src = urlArr[1];
	} else if ( img.includes(urlArr[1]) ) {
		document.getElementById("productImage").src = urlArr[2];
	} else if ( img.includes(urlArr[2]) ) {
		document.getElementById("productImage").src = urlArr[3];
	} else if ( img.includes(urlArr[3]) ) {
		document.getElementById("productImage").src = urlArr[4];
	} else if ( img.includes(urlArr[4]) ) {
		document.getElementById("productImage").src = urlArr[5];
	} else if ( img.includes(urlArr[5]) ) {
		document.getElementById("productImage").src = urlArr[6];
	} else if ( img.includes(urlArr[6]) ) {
		document.getElementById("productImage").src = urlArr[7];
	} else if ( img.includes(urlArr[7]) ) {
		document.getElementById("productImage").src = urlArr[8];
	}

	setTimeout(analyseImage, 100);
}

/////////////////////
// Palette picking //
/////////////////////

function analyseImage() {
	var colorThief = new ColorThief();
	var sourceImage = document.getElementById("productImage");

	var domcolor = colorThief.getColor(sourceImage)
	console.log("domcolor", domcolor);

	var palette = colorThief.getPalette(sourceImage)
	console.log("palette", palette);

	populatePalette(domcolor, palette);
}

function populatePalette(domcolor, palette) {
	// clear previous palette
	document.getElementById('swatchHolder').innerHTML = '';

	// populate new palette
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

analyseImage();

/// not used yet
function _getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
