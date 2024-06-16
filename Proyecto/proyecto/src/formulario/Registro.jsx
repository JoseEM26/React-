import React,{useState} from "react";

import Login from "./Login";

function FormularioRegistro() {
    const [tipos, setTipos] = useState('');
    const [registrado, setRegistrado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Gracias por registrarse');
        setRegistrado(true);
    };

    return(
        <div >
            {registrado ? (
                <Login/>
            ): (
                <form onSubmit={handleSubmit}>
                    <h1 className="letrasss">Registrar Datos</h1>

                    <div className="form-group">
                        <label htmlFor="inombre"className="letrass">Nombre</label>
                        <input
                        type="text"
                        className="form-control"
                        id="inombre"
                        name="nombre"
                        placeholder="Ingrese nombre"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="iapellido"className="letrass">Apellido</label>
                        <input
                        type="text"
                        className="form-control"
                        id="iapellido"
                        name="apellido"
                        placeholder="Ingrese apellido"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="itipo"className="letrass">Tipo</label>
                        <select
                        className="form-control"
                        id="itipo"
                        name="tipos"
                        value={tipos}
                        onChange={(e) => setTipos(e.target.value)}
                        >
                            <option value="1" className="a1">Administrador</option>
                            <option value="2"className="a1">Vendedor</option>
                            <option value="3"className="a1">Almacen</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="iarea"className="letrass">Observaciones:</label>
                        <textarea className="form-control" id="iarea" rows={3}></textarea>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="ibecado" name="becado"/>
                        <label htmlFor="ibecado" className="form-check-label">
                            ¿Becado?
                        </label>
                    </div>
                    <button type="submit" className="btnbtny">
                        Registrar
                    </button>
                    
                </form>
            )
            }
        </div>
    )
}

export default FormularioRegistro