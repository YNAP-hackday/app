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
	document.getElementById('compareHolder').innerHTML = '';
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
	document.getElementById('compareHolder').innerHTML = '';
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
		div.addEventListener('click', getColor);
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

		var matchImg = Math.floor(allColors.indexOf(color) / 8);
		console.log(`match success! rgb color: ${color}, index: ${allColors.indexOf(color)}, matchImg: ${matchImg}`)

		color.push(matchImg);

		showCompare(color)
	}})
}

function showCompare(color) {
	// fetch variables
	var color = color;
	var img = color.pop()

	// elemetns to add
	var div = document.createElement("div")
	var compareImg = document.createElement("img")

	console.info(color)
	console.info(img)

	// add color div

	document.getElementById('compareHolder').appendChild(div)
	div.classList.add('swatch-small')
  div.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`

	// add image of the product
	document.getElementById('compareHolder').appendChild(compareImg)
	compareImg.src = urlArr[img];
	compareImg.classList.add('prodImg-small')

	// updateSwatches();
}

///////////////////////////
// CLICKING TO GET COLOR //
///////////////////////////


// links swatches
// function updateSwatches() {
// 	var swatches = document.getElementsByClassName('swatch')
// 	console.log(swatches)
// 	for (var i = 0; i < swatches.length; i++) {
// 	    swatches[i]
// 	}
// }


function getColor() {
	if (event.target.classList.contains('swatch') == true) {
		var newColor = this.style.backgroundColor;
		console.log("yeehaw ",newColor)
		compareNewColor(newColor)
	}

}

function compareNewColor(newColor) {

	document.getElementById('compareHolder').innerHTML = '';
	console.log('newcolor' + newColor)

	var newColor = newColor

	console.log(newColor);

	newColor = newColor.substring(4, newColor.length-1)
         .replace(/ /g, '')
         .split(',');

	// newColor.forEach(function(el) {
	// 	return parseInt(el, 10);
	// })

	newColor = newColor.map(Number)

	console.log(newColor);

	allColors.forEach(function(color) {
		if
			(color[0] <= newColor[0] + 20 &&
			color[0] >= newColor[0] - 20 &&
			color[1] <= newColor[1] + 20 &&
			color[1] >= newColor[1] - 20 &&
			color[2] <= newColor[2] + 20 &&
			color[2] >= newColor[2] - 20) {

		var matchImg = Math.floor(allColors.indexOf(color) / 8)
		// console.log(`match success! rgb color: ${color}, index: ${allColors.indexOf(color)}, matchImg: ${matchImg}`)

		color.push(matchImg);

		showCompare(color)
	}})

}
