
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `© ${currentYear} <a href="#" class="hover:underline">revify</a>. Todos los derechos reservados.`;
});
