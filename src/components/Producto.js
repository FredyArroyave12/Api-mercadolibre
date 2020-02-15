import React from 'react';

const Producto = ({producto}) => {
     
    // extraer el texto
    let { text } = producto.title;
    if(text) {
        if(text.length > 250) {
            text = text.substr(0, 250);
        }
    } else {
        text = null;
    }

    return ( 
        <div>
            <div className="uk-card uk-card-default uk-card-hover ">
                <div className="uk-card-media-top">
                    {producto.thumbnail 
                        ? <img src={producto.thumbnail} alt={producto.title} />
                        : null }
                </div>

                <div className="uk-card-body">
                    <h3 className="uk-card-title">{producto.title}</h3>
                    {text}
                </div>
                <div className="uk-card-body">Precio
                    <div className="uk-card-title">${producto.price}</div>
                    
                </div>            


        </div>
        </div>
     );
}
 
export default Producto;