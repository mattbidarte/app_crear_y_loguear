let logueo, nombre, contrasena, usuario1

//FUNCION PARA INICIAR CON BUCLE

function inicio(){
    logueo = prompt('¿Desea -loguear- o crear un -nuevo- usuario?\nEscriba "salir" para salir.')

    while(logueo !== 'salir'){
        switch(logueo){
            case 'loguear':
                loguear()
                break
            case 'nuevo':
                nuevoUsuario()
                break
            default:
                alert('Esa opcion no es valida')
                break
        }
        logueo = prompt('¿Desea loguear o crear un nuevo usuario?\nEscriba "salir" para salir.')
    }
}

//OBJETO DE NUEVO USUARIO

class Usuario{
    constructor(nombre, contrasena){
        this.nombre = nombre
        this.contrasena = contrasena
    }
}

//CREAR NUEVO USUARIO

function nuevoUsuario(){
    nombre = prompt('Ingresa tu nombre de usuario a registrar.')
    contrasena = prompt('Ingresa tu contraseña a registrar.')

    usuario1 = new Usuario(nombre, contrasena)
    
    alert(`Ha creado un nuevo usuario\nNombre de usuario: ${nombre}\nContraseña: ${contrasena}`)
    console.log(usuario1)
}

//LOGUEAR USUARIO CREADO

function loguear(){
    let nombre = prompt('Ingresa tu nombre de usuario.')
    let contrasena = prompt('Ingresa tu contraseña.')

    if(nombre === usuario1.nombre && contrasena === usuario1.contrasena){
        alert('Se ha logueado correctamente')
    }else{
        alert('Contraseña o usuario incorrectos, intente nuevamente.')
    }
}

//LLAMADO A FUNCIÓN PRINCIPAL

inicio()







