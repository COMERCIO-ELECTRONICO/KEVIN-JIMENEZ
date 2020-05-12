// DEBER
/*
usar un arreglo de json (nombre, edad, fechaNacimiento, telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/
var arregloJsons = [{
    nombre: 'kevin',
    edad: 25,
    fechaNacimiento: new Date(),
    telf: 091883847373
}]

var usuarioNuevo = {
    nombre: 'orlan',
    edad: 24,
    fechaNacimiento: new Date(),
    telf: 222222222
}

function crearUsuario(arreglo, usuarioACrear, cb) {
    var usuarioEncontrado = arreglo
        .find(
            (item) => {
                return item.nombre === usuarioACrear.nombre
            })
    // console.log(usuarioEncontrado);
    if (usuarioEncontrado !== undefined) {
        arreglo.push(usuarioACrear)
        cb({
            mensaje: 'Usuario creado',
            usuario: usuarioACrear,
            arreglo
        })
    } else {
        cb({
            mensaje: 'Usuario existe',
            usuario: usuarioACrear,
            arreglo
        })
    }
}

crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
    console.log(`mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}`)
    console.log(respuestaCallback.arreglo)
})