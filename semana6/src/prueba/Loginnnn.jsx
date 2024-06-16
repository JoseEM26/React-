import React,{useState} from "react";
import FormularioRegistrossss from "./Registroooo";

const usuarios = [
    {nombreUsuario: 'usuario1', contrasena: 'contraseña1'},
    {nombreUsuario: 'usuario2', contrasena: 'contraseña2'},
    {nombreUsuario: 'usuario3', contrasena: 'contraseña3'},
    {nombreUsuario: 'usuario4', contrasena: 'contraseña4'},
    {nombreUsuario: 'usuario5', contrasena: 'contraseña5'}
]

function Loginee(){
const[nombreUsuario,setNombreUsuario]=useState([]);
const[contrasena,setContrasena]=useState([]);
const[mostrarRegistro,setMostrarRegistro]=useState(false);
   
    function EnvioDatos(event){
       event.preventDefault();

    const usuarioEncontradO=usuarios.find((usuario)=>
       usuario.nombreUsuario===nombreUsuario && usuario.contrasena===contrasena
    )
    
     if(usuarioEncontradO){
        alert(`ienvenido ${usuarioEncontradO.nombreUsuario}`);
     }
     else{
        alert('Registrate plis');
        setMostrarRegistro(true)
     }}


     return(
        <div>
            {mostrarRegistro?(<FormularioRegistrossss></FormularioRegistrossss>):(
                
                <form action={EnvioDatos}>
                    <div>
                    <label htmlFor="nombre">Nombre de Usurario</label>
                    <input type="text" id="nombre" placeholder="ingrese sus datos"
                    onChange={(e)=>setNombreUsuario(e.target.value)} 
                    value={nombreUsuario} className="form-control"/>
                    </div>

                    <div>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="text" id="contraseña" placeholder="ingrese sus datos"
                    onChange={(e)=>setContrasena(e.target.value)} 
                    value={contrasena} className="form-control"/>
                    </div>

                    <div>
                        <button type="submit" className="">Registrar</button>
                    </div>
                    </form>
                
            )}
        </div>
     )

}
     export default Loginee