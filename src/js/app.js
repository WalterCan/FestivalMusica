document.addEventListener("DOMContentLoaded", function () {
	iniciarApp();
});
// Arrancamos nuestra aplicación
function iniciarApp() {
	crearGaleria();
}
// Creamos la Galeria
function crearGaleria() {
	const galeria = document.querySelector(".galeria-imagenes");

	for (let i = 1; i <= 12; i++) {
		const imagen = document.createElement("picture");
		imagen.innerHTML = `
		<source srcset="/build/img/thumb/${i}.avif" type="image/avif" />
		<source srcset="/build/img/thumb/${i}.webp" type="image/webp" />
		<img width="200" height="300" src="/build/img/thumb/${i}.jpg" alt="Imagen Galería"
		/>`;
		galeria.appendChild(imagen);
	}
}
