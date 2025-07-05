const form = document.getElementById('gasto-form');
const tablaBody = document.querySelector('#gastos-tabla tbody');
const totalSpan = document.getElementById('total-gastos');

let gastos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fecha = document.getElementById('fecha').value;
    const categoria = document.getElementById('categoria').value;
    const monto = parseFloat(document.getElementById('monto').value);

    if (!fecha || !categoria || isNaN(monto)) return;

    gastos.push({ fecha, categoria, monto });
    actualizarLista();
    form.reset();
    mostrarMensaje('Gasto agregado correctamente', 'success');
});

function mostrarMensaje(mensaje, tipo) {
    let mensajeDiv = document.getElementById('mensaje');
    if (!mensajeDiv) {
        mensajeDiv = document.createElement('div');
        mensajeDiv.id = 'mensaje';
        form.parentNode.insertBefore(mensajeDiv, form);
    }
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo === 'success' ? 'mensaje-exito' : 'mensaje-error';
    setTimeout(() => {
        mensajeDiv.textContent = '';
        mensajeDiv.className = '';
    }, 2000);
}

function actualizarLista() {
    tablaBody.innerHTML = '';
    let total = 0;
    // Ordenar gastos por fecha ascendente (más antiguo primero)
    const gastosOrdenados = [...gastos].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    gastosOrdenados.forEach(gasto => {
        const fila = document.createElement('tr');
        // Determinar clase según el monto
        let claseMonto = '';
        if (gasto.monto > 5000) {
            claseMonto = 'monto-rojo';
        } else if (gasto.monto > 2000) {
            claseMonto = 'monto-amarillo';
        } else {
            claseMonto = 'monto-verde';
        }
        fila.innerHTML = `
            <td>${gasto.fecha}</td>
            <td>${gasto.categoria}</td>
            <td class="${claseMonto}">$${gasto.monto.toFixed(2)}</td>
        `;
        tablaBody.appendChild(fila);
        total += gasto.monto;
    });
    totalSpan.textContent = total.toFixed(2);
}
