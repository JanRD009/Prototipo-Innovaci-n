document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const correo = document.getElementById('correo').value.trim();
        const nombre = document.getElementById('nombre').value.trim();
        const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
        const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();

        // Validación
        if (!correo || !nombre || !apellidoPaterno || !apellidoMaterno || !contraseña) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }

        if (!validateEmail(correo)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        alert('Formulario enviado con éxito.');
        form.reset(); 
    });

    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
