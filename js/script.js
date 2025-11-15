// Script básico para Proyecto Yoga

document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de Yoga cargada correctamente.');

    // Ejemplo: Agregar funcionalidad al formulario de contacto
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Gracias por contactarnos. Te responderemos pronto.');
        });
    }
});