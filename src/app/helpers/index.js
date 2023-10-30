const generarId = () => {
    const rnd = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return `${rnd}${fecha}`;
}

const formatearFecha = fecha => {
    const fechaNueva = new Date(fecha);
    const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
    return fechaNueva.toLocaleDateString('es-ES', opciones);
}

export {
    generarId,
    formatearFecha
}