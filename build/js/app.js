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

		imagen.onclick = function () {
			mostrarImagen(i);
		};
		galeria.appendChild(imagen);
	}
}

function mostrarImagen(id) {
	const imagen = document.createElement("picture");
	imagen.innerHTML = `
		<source srcset="/build/img/grande/${id}.avif" type="image/avif" />
		<source srcset="/build/img/grande/${id}.webp" type="image/webp" />
		<img width="200" height="300" src="/build/img/grande/${id}.jpg" alt="Imagen Galería"
		/>`;

	// Crea el Overlay con la imagen
	const overlay = document.createElement("DIV");
	overlay.appendChild(imagen);
	overlay.classList.add("overlay");
	overlay.onclick = function () {
		const body = document.querySelector("body");
		body.classList.remove("fijar-body");
		overlay.remove();
	};

	// Botón de cerrar modal

	const cerrarModal = document.createElement("P");
	cerrarModal.textContent = "X";
	cerrarModal.classList.add("btn-cerrar");
	// Cerramos el Modal
	cerrarModal.onclick = function () {
		const body = document.querySelector("body");
		body.classList.remove("fijar-body");
		overlay.remove();
	};
	// Agregamos el botón al overlay
	overlay.appendChild(cerrarModal);

	// Lo añadimos al HTML
	const body = document.querySelector("body");
	body.appendChild(overlay);
	//vamos a cancelar el scroll
	body.classList.add("fijar-body");
}
