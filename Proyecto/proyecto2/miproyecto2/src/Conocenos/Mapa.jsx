import React from "react";
import Imagen1 from "../img/imgubi.png"
import Imagen2 from "../img/iconohora.png"
import Imagen3 from "../img/oficina 2.jpg"
import Imagen4 from "../img/logowsp.jpg"
import Imagen5 from "../img/logocorreo.jpg"
import Pie from "../a-paginas/Pie";

function Imagubi() {
    return (
        <img src={Imagen1} className="imgub" alt="ubi" />
    );
}

function Imaghora() {
    return (
        <img src={Imagen2} className="imghr" alt="hor" />
    );
}

function Ubicacion() {
    return (
        <img src={Imagen3} className="imgdere" alt="dere" />
    );
}

function Imagwsp() {
    return (
        <img src={Imagen4} className="imgwsp" alt="wsp" />
    );
}

function Imagcorre() {
    return (
        <img src={Imagen5} className="imgcorre" alt="corre" />
    )
}

function Datos() {
    return (
        <div class="Body">
            <div className="Datos">
                <div>
                    <Imagubi />
                </div>

                <div>
                    <Imaghora />
                </div>
            </div>

            <div className="Datos2">
                <div>
                    <h1>Ubicación</h1>
                    <p>Dirección: Av. Uruguay 514, Lima 15001</p>
                </div>

                <div>
                    <h1>Hora de Atención</h1>
                    <p>Lunes a Sábado de 09:00 - 21:00</p>
                </div>
            </div>
            
            <div>
                <Ubicacion />
            </div>

        </div>
    );
}

function Ubica() {
    return (
        <div class="map">
            <iframe className="mapita" width="110%" height="260" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Uruguay%20514,%20Lima%2015001+(Apple%20Essence)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/population/">Population Estimator map</a>
            </iframe>
        </div>
    )
}

function Redes() {
    return (
        <div class="comunicar">

            <div class="whats">

                <h1>WHATSAPP</h1>
                <p>Ventas y Consultas: </p>
                <p>974-429-595</p>

                <p>Servicio Tecnico y Garantia:</p>
                <p>953-686-301</p>

                <div>
                    <Imagwsp />
                </div>
            </div>

            <div class="email">
                <h1>EMAILS</h1>
                <p>Consultas:</p>
                <p>info@xxxxx.com</p>

                <p>Servicio Tecnico</p>
                <p>ServicioTecnico@xxxx.com</p>
                <div >
                    <Imagcorre />
                </div>
            </div>

        </div>
    )
}

function Mapa() {
    return (
        <div className="bloqmapa">
            <Datos />
            <Ubica />
            <Redes />
            <Pie></Pie>
        </div>
    );
}

export default Mapa; 