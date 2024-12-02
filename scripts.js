function openTab(event, tabId) {
    // Ocultar todos los contenidos de las pestañas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active-content');  // Eliminar la clase active-content de todos
    });

    // Eliminar la clase 'active-tab' de todas las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');  // Eliminar la clase active-tab de todas
    });

    // Mostrar el contenido correspondiente y activar la pestaña seleccionada
    const activeTabContent = document.getElementById(tabId);
    if (activeTabContent) {
        activeTabContent.classList.add('active-content');  // Agregar active-content al contenido correspondiente
    }

    // Activar la pestaña seleccionada
    event.currentTarget.classList.add('active-tab');  // Agregar active-tab a la pestaña seleccionada
}
function redirigir1(){
    window.location.href="PagInicio.html";
}
function redirigir2(){
    window.location.href="SobreNosotros.html";
}
function redirigir3(){
    window.location.href="Contactos.html";
}
function ingresarPaciente(){
    window.location.href="pagPaciente.html";
}
function ingresarMedico(){
    window.location.href="pagMedico.html";
}
