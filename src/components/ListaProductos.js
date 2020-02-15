import React from 'react';
import {ProductosConsumer } from '../context/ProductosContext';
import ProductoReaccion from './ProductoReaccion.js';


const ListaProductos = () => {
    return ( 
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <ProductosConsumer>
                {(value) => {
                    return value.productos.map(producto => (
                        <ProductoReaccion 
                            key={producto.id}
                            producto={producto}
                        />
                    ))
                }}
            </ProductosConsumer>
        </div>
    );
}
 
export default ListaProductos;