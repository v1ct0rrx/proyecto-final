import Table from 'rc-table';
import React from 'react';
import PropTypes from 'prop-types';

const Tabla = (props) => {
    return (
        <Table columns={props.columns} data={props.data} />
       );
}

Tabla.propsType = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

const actualizarInfo = () =>{
    this.Tabla.data = [];
};


export default Tabla;