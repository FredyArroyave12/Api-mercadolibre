import React, { Component } from 'react';
import { ProductosConsumer } from '../context/ProductosContext';

class Header extends Component {
    state = { 
        nombre: ''
    }

    // si el usuario agrega un producto
    obtenerDatosProducto = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   
    render() {
        return ( 
            <ProductosConsumer>
                {(value) => {
      
                    return( 

                        <nav className="uk-navbar-container uk-margin navBar">
                            <div className="uk-navbar-left navBar">

                            <div>
                    <h6 class= "h6">FREDY ESTEBAN ARROYAVE-MERCADO LIBRE...</h6></div>
                               

                                <div className="uk-navbar-item">
                                    <form
                                            onSubmit={e => {
                                                e.preventDefault();
                                                value.obtenerProductos(this.state)
                                            }}
                                        >      
                                    <input
                                            name="nombre"
                                            className="uk-input uk-form-width-large buscar"
                                            
                                            type="text"
                                            placeholder="Buscar productos"
                                            onChange={this.obtenerDatosProducto}
                                        />
                                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: search">
                                            <input type="submit" className="uk-button uk-button-default uk-icon" value="Buscar" />   
                                        </span>  
                                        
                          
                                    </form>
                              
                                
                                       
                                </div>
                            </div>
                        </nav>

             
                )
            }}
            </ProductosConsumer>
         );
    }
}
 
export default Header;