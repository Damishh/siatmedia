function zoomIn(element) {
    element.style.transform = 'scale(1.1)'; // Aumenta el tamaño de la imagen al 110%
    element.style.transition = 'transform 0.3s ease'; // Agrega una transición suave
}

function zoomOut(element) {
    element.style.transform = 'scale(1)'; // Restaura el tamaño original de la imagen
}
