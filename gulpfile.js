const { src, dest, watch } = require("gulp"); //Gulp -> Retorna multiples Funciones, por eso las llaves
const Sass = require("gulp-sass")(require("sass")); //Gulp-sass -> Retorna solo una funcion

function css(done) {
	src("../FestivalMusica/src/scss/**/*.scss") //Identificamos el archivo SCSS a compilar
		.pipe(Sass()) //Compilarlo
		.pipe(dest("../FestivalMusica/build/css")); //Almacenamos en el disco duro

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
exports.dev = dev;
