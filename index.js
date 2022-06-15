class Servicio {
    constructor(tipo, distancia, vehiculo, precio) {
        this.tipo = tipo;
        this.distancia = distancia;
        this.vehiculo = vehiculo;
        this.precio = precio;
    }
}

const servicios = [
    new Servicio('Empresarial/Remis', 60, 'auto', 1000),
    new Servicio('Mudanza/Traslado de mercaderia', 135, 'camion', 2500),
    new Servicio('Traslado de materia prima al interior', 600, 'camion y acoplado', 5000)
]

function mostrarServicios() {
    alert('Nuestra empresa cuenta con los siguiente servicios:');
    for (const servicio of servicios) {
        alert(`Servicio de ${servicio.tipo}`);
    }

    pedirDatos();
}

function pedirDatos() {
    const datoUsuario = prompt('¿Qué servicio desea contratar?');
    const servicioEncontrado = servicios.find(servicio => servicio.tipo.toLowerCase() === datoUsuario.toLowerCase());

    if (servicioEncontrado) {
        alert(`El servicio de ${servicioEncontrado.tipo} tiene un costo de $${servicioEncontrado.precio}`)
        } else {
        alert('No contamos con ese servicio, inténtelo nuevamente');
        mostrarServicios();
    }

}

mostrarServicios();

