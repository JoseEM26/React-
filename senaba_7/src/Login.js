import React, {useState} from "react";

import FormularioRegistro from "./FormularioRegistro";

const usuarios = [
    {nombreUsuario: 'usuario1', contrasena: 'contraseña1'},
    {nombreUsuario: 'usuario2', contrasena: 'contraseña2'},
    {nombreUsuario: 'usuario3', contrasena: 'contraseña3'},
    {nombreUsuario: 'usuario4', contrasena: 'contraseña4'},
    {nombreUsuario: 'usuario5', contrasena: 'contraseña5'}
]

const Login = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('')
    const [mostrarRegistro, setMostrarRegistro] = useState(false)

    //función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        )

        if(usuarioEncontrado) {
            alert(`¡Bienvenido, ${usuarioEncontrado.nombreUsuario}`)
        } else {
            alert('El usuario y/o contraseña incorrectos')
            setMostrarRegistro(true)
        }
    }

    return (
        <div className="container">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="icorreo">Nombre de usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            id="icorreo"
                            name="nombreUsuario"
                            placeholder="Ingresa tu usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword">Nombre de usuario</label>
                        <input
                            type="password"
                            className="form-control"
                            id="ipassword"
                            name="contraseña"
                            placeholder="Ingresa tu contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Ingresar
                    </button>
                </form>
            ) : (
                <FormularioRegistro/>
            )}
        </div>
    )
}

export default Login