import React from 'react';
import PropTypes from 'prop-types';
import '../css/boton.css';

const Boton = (props) =>{
    return (
        <button class={props.className} onClick={props.handleClick}>
           {props.texto}
        </button>
     );
}

Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired
 }
 
 export default Boton;