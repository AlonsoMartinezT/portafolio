var typed = new Typed('#element', {
    strings: ['Desarrollador Front-End', 'Desarrollador Back-End', 'Desarrollador Web', 'Diseñador'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

var typed = new Typed('#sobre', {
    strings: [' Estudiante Universitario'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

document.getElementById('view-pdf').addEventListener('click', function() {
    const pdfUrl = 'img/Currículum Vitae CVpdf.pdf'; // Reemplaza con la ruta de tu PDF
    const pdfViewer = document.getElementById('pdf-viewer');
    const modal = document.getElementById('modal');

    pdfViewer.src = pdfUrl; // Asigna la URL del PDF al iframe
    modal.style.display = 'flex'; // Muestra el modal
});

document.getElementById('close-btn').addEventListener('click', function() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const modal = document.getElementById('modal');

    pdfViewer.src = ''; // Limpia el src para que no se siga cargando
    modal.style.display = 'none'; // Oculta el modal
});

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
