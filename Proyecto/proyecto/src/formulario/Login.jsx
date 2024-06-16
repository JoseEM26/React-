import React, {useState} from "react";
import FormularioRegistro from "./Registro";

const usuarios = [
    {nombreUsuario: 'joseangelespinozamorales@gmail.com', contrasena: 'joseangel1'},
    {nombreUsuario: 'usuario2', contrasena: 'contraseña2'},
    {nombreUsuario: 'usuario3', contrasena: 'contraseña3'},
    {nombreUsuario: 'usuario4', contrasena: 'contraseña4'},
    {nombreUsuario: 'usuario5', contrasena: 'contraseña5'}
]

const Login = () => {

    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [mostrarRegistro, setMostrarRegistro] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombreUsuario === nombreUsuario && usuario.contrasena === contrasena
        );
         
        
            
          
            
        
        if(usuarioEncontrado) {
            alert(`Bienvenido ${nombreUsuario}`)
            
        } else {
            alert('El usuario no existe. Por favor, completa el formulario de registro');
            setMostrarRegistro(true);
        }
    }
    
    return(
        <div className="container">
            <div className="marco">
            {!mostrarRegistro ? (
                <form onSubmit={handleSubmit}>
                    <h1 className="letrasss">Formulario Login</h1>
                    <div className="form-group">
                        <label htmlFor="icorreo"className="letrass">Nombre de usuario</label><br></br>
                        <input
                            type="text"
                            className="form-control"
                            id="icorreo"
                            name="nombreUsuario"
                            placeholder="Ingrese nombre de usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                    <label htmlFor="ipassword"className="letrass">Contraseña</label><br></br>
                        <input
                            type="password"
                            className="form-control"
                            id="ipassword"
                            name="contraseña"
                            placeholder="Ingrese contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                        />
                    </div>
                    <div className="contenedorRecordarContra">
                    <input type="checkbox" className="ckeckk"/>

                        <label className="checkks">Recordar Contraseña?</label>
                    </div>
                    <button type="submit" className="btnbtny">
                        Ingresar
                    </button>
                </form>
            ) : (
               <FormularioRegistro></FormularioRegistro>
            )
            }
            </div>
        </div>
    )
}

export default Login