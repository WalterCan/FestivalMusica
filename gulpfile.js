const { src, dest } = require("gulp"); //Gulp -> Retorna multiples Funciones, por eso las llaves
const Sass = require("gulp-sass"); //Gulp-sass -> Retorna solo una funcion

function css(done) {
	src("../FestivalMusica/src/scss/app.scss") //Identificamos el archivo SCSS a compilar
		.pipe(Sass()) //Compilarlo
		.pipe(dest("../FestivalMusica/build/css")); //Almacenamos en el disco duro

	done();
}

exports.css = css;
