const { src, dest, watch, parallel } = require("gulp"); //Gulp -> Retorna multiples Funciones, por eso las llaves

//CSS

const Sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); //Gulp-sass -> Retorna solo una funcion

// IMAGENES

const webp = require("gulp-webp");

function css(done) {
	src("../FestivalMusica/src/scss/**/*.scss") //Identificamos el archivo SCSS a compilar
		.pipe(plumber())
		.pipe(Sass()) //Compilarlo
		.pipe(dest("../FestivalMusica/build/css")); //Almacenamos en el disco duro

	done();
}

function versionWebp(done) {
	const opciones = {
		quality: 50,
	};
	src("../FestivalMusica/src/img/**/*.{png, jpg}")
		.pipe(webp(opciones)) //pasamos las opciones con la calidad
		.pipe(dest("../FestivalMusica/build/img")); //Lo almacenamos en el disco duro
	done();
}

function dev(done) {
	// Pasamos el Watch, Este lleva dos parametros
	// 1ro a que archivo le voy a dar Watch
	// 2do la funcion a llamar, en este caso -> CSS
	watch("../FestivalMusica/src/scss/**/*.scss", css);
	done();
}

exports.css = css;
exports.versionWebp = versionWebp;
exports.dev = parallel(versionWebp, dev); //Usamos parallel para ejecutar dos funciones al mismo tiempo
