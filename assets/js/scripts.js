document.addEventListener ('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const nombreCarrera = urlParams.get ('nombre');

    if (nombreCarrera) {
        const carreraTitle = document.getElementById('carrera-title');
        const carreraDescription = document.getElementById('carrera-description');
        const carreraForm = document.getElementById('carrera-form');

        const carreraRutas = {
            AnalisisSistemas: 'carrera-analisis-sistemas.html',
            GestionAmbiental: 'carrera-gestion-ambiental.html',
            AcompañanteTerapeutico: 'carrera-acompañante-terapeutico.html',
            EmergenciasSalud: 'carrera-emergencias-salud.html',
            Logistica: 'carrera-logistica.html',
            Textil: 'carrera-textil-indumentaria.html',
            Turismo: 'carrera-turismo.html',
        };

        if (carreraRutas[nombreCarrera]) {
            const rutaHTML = carreraRutas[nombreCarrera];

            fetch(rutaHTML)
            .then (response => response.txt())
            .then (data => {
                carreraTitle.textContent = nombreCarrera;
                carreraDescription.innerHTML = data;
                carreraForm.href = 'enlace-al-formulario-de-inscripcion-${nombreCarrera.toLowerCase()}.html';
            })
            .catch(error => console.error ('Error al cargar el contenido: ',error));
        }
    }

});