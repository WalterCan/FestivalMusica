const { src, dest, watch, parallel } = require("gulp"); //Gulp -> Retorna multiples Funciones, por eso las llaves

//CSS

const Sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); //Gulp-sass -> Retorna solo una funcion
// Importamos autoprefixer,  cssnano gulp-postcss y postcss, vamos a mejorar el codigo css
const autoprefixer = require("autoprefixer"); // que funcione en otros navegadores
const cssnano = require("cssnano"); // comprimir el codigo Css
const postcss = require("gulp-postcss"); //Le hace transformacion por medio de los dos anteriores
// Agregamos el sourcemaps
const sourcemaps = require("gulp-sourcemaps");

const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done) {
	src("../FestivalMusica/src/scss/**/*.scss") //Identificamos el archivo SCSS a compilar
		// Agrega el sourcemaps
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(Sass()) //Compilarlo
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write("."))
		.pipe(dest("../FestivalMusica/build/css")); //Almacenamos en el disco duro

	done();
}

function imagenes(done) {
	const opciones = {
		optimizationLevel: 3,
	};
	src("../FestivalMusica/src/img/**/*.{png,jpg}")
		.pipe(cache(imagemin(opciones))) //Mejoramos la imagenes a una optimizacion de 3
		.pipe(dest("../FestivalMusica/build/img")); //Almacenamos
	done();
}

function versionWebp(done) {
	const opciones = {
		quality: 50,
	};
	src("../FestivalMusica/src/img/**/*.{png,jpg}")
		.pipe(webp(opciones)) //pasamos las opciones con la calidad
		.pipe(dest("../FestivalMusica/build/img")); //Lo almacenamos en el disco duro
	done();
}

function versionAvif(done) {
	const opciones = {
		quality: 50,
	};
	src("../FestivalMusica/src/img/**/*.{png,jpg}")
		.pipe(avif(opciones)) //pasamos las opciones con la calidad
		.pipe(dest("../FestivalMusica/build/img")); //Lo almacenamos en el disco duro
	done();
}
function javaScript(done) {
	src("../FestivalMusica/src/js/**/*.js") //Identificamos el archivo JS
		.pipe(dest("../FestivalMusica/build/js"));
	done();
}

function dev(done) {
	// Pasamos el Watch, Este lleva dos parametros
	// 1ro a que archivo le voy a dar Watch
	// 2do la funcion a llamar, en este caso -> CSS
	watch("../FestivalMusica/src/scss/**/*.scss", css);
	watch("../FestivalMusica/src/js/**/*.js", javaScript);
	done();
}

exports.css = css;
exports.javaScript = javaScript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javaScript, dev); //Usamos parallel para ejecutar dos funciones al mismo tiempo
