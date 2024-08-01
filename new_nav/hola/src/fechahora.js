import React, { Component } from "react";

let f = new Date();

class FechayHora extends Component {
    state = {
        fecha: null,
        hora: null
    };

    constructor(props) {
        super(props);
        this.state = {
            fecha: f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
        }
    };

    render() {
        f = new Date();
        let h = f.getHours();
        let m = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes();
        let s = f.getSeconds() < 10 ? "0" + f.getSeconds() : f.getSeconds();

        setTimeout(() => this.setState({
            hora: h + ":" + m + ":" + s
        }), 1000);

        const estilosFooter = {
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
        
        }



        return (
            <div>
                <footer style={estilosFooter}>
                    
                    <div className="Fechadiv" >Hora: {this.state.hora}</div>
                    <div className="Fechadiv" >Fecha: {this.state.fecha}</div>
                    
                </footer>
            </div>
        );
    };
}
export default FechayHora;