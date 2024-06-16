import React,{useState} from "react";
import Loginee from "./Loginnnn";

function FormularioRegistrossss(){
    const [tipo,setTipos]=useState("");
    const[registro,SetRegistro]=useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();

        alert("Bienvenido fraciasjasdsakmdsa")
        SetRegistro(true);
    }

    return(
        <div>
            {registro?(<Loginee></Loginee>):(
            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="nombre">Ingresa Su nombre</label>
                    <input type="text" id="Nombre" placeholder="Ingresa Nombre"/>
                </div>
                <div>
                    <label htmlFor="apellidpo">Ingresa Su Apellidp</label>
                    <input type="text" id="apellidpo" placeholder="Ingresa apellidpo"/>
                </div>
                <div>
                    <label htmlFor="tipo">Ingresa su tipo</label>
                    <select name="tipo" id="tipo" value={tipo}
                    onChange={(e)=>setTipos(e.target.value)}>
                        <option value="1">Administrador</option>
                        <option value="2">Vendededor</option>
                        <option value="3">Almacen</option>
                    </select>
                </div>
                <div>
                    <input type="checkbox" id="becado" />
                    <label htmlFor="becado">BEcado</label>
                </div>
                <div>
                    <button type="submit"> Ingresar</button>
                </div>
            


            </form>



            )}
        </div>
    )}
export default FormularioRegistrossss