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
		document.getElementById("productImage").src = urlArr[0];
	}

	setTimeout(analyseImage, 100);
}

/////////////////////
// Palette picking //
/////////////////////

function analyseImage() {
	var colorThief = new ColorThief();
	var sourceImage = document.getElementById("productImage");
	var palette = colorThief.getPalette(sourceImage, 9)
	populatePalette(palette);
}

function populatePalette(palette) {
	// clear previous palette
	document.getElementById('swatchHolder').innerHTML = '';

	// populate new palette
	var palette = palette;

	palette.forEach(function(singlePalette) {
		var div = document.createElement("div")
		document.getElementById('swatchHolder').appendChild(div)
		div.classList.add('swatch')

		div.style.backgroundColor = `rgb(${singlePalette[0]}, ${singlePalette[1]}, ${singlePalette[2]})`
	})

	compareColor(palette);
}

analyseImage();

//////////////////////////
// getting other images //
//////////////////////////

function compareColor(palette) {
	var domColor = palette[0];

	allColors.forEach(function(color) {
		if
			(color[0] <= domColor[0] + 20 &&
			color[0] >= domColor[0] - 20 &&
			color[1] <= domColor[1] + 20 &&
			color[1] >= domColor[1] - 20 &&
			color[2] <= domColor[2] + 20 &&
			color[2] >= domColor[2] - 20) {

		console.log(`match success! rgb color: ${color}, index: ${allColors.indexOf(color)}`)


	}})

	// comparing each colour of img2 to dominant colour of palette
	//
	// img1.forEach(function(color) {
	// 	// compare each rgb value of colour to palette colour
	// 	if (color[0] <= palette[0][0] + 20 && color[0] >= palette[0][0] - 20) {
	// 		if (color[1] <= palette[0][1] + 20 && color[1] >= palette[0][1] - 20) {
	// 			if (color[2] <= palette[0][2] + 20 && color[2] >= palette[0][2] - 20) {
	// 				console.log(color, ' color match!')
	// 				return true;
	// 			} else {
	// 				console.log(color, 'B no colour match')
	// 				return false;
	// 			}
	// 		} else {
	// 			console.log(color, 'G no colour match')
	// 			return false;
	// 		}
	// 	} else {
	// 		console.log(color, 'R no colour match')
	// 		return false;
	// 	}
	// })


}
