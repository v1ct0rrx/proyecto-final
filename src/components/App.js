import React, { Component } from 'react';
import Tabla from 'rc-table';
import Boton from './Boton';
import '../css/index.css';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: "",
      contacts: []
    }
  }

  handleItemDeleted = (value, row) => {
    const index = this.state.contacts.indexOf(row, 0);
    this.setState({
      contacts: this.state.contacts.splice(row, 1)
    });
  }

  componentDidMount = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  };

  render() {
    return (
      <div>
        <Tabla columns={this.columns} data={this.state.contacts} />
      </div>
    )
  }

  columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 100,
      className: 'columna'
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      className: 'columna'
    },
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
      width: 200,
      className: 'columna'
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
      width: 200,
      className: 'columna'
    },
    {
      title: 'Editar',
      dataIndex: '',
      key: 'operations',
      className: 'columna',
      render: (value) => <Boton className='button-editar' texto={'Editar'} handleClick={() => this.handleClickEditar(value)} />,
    },
    {
      title: 'Eliminar',
      dataIndex: '',
      key: 'operations',
      className: 'columna',
      render: (value, row) => <Boton className='button-eliminar' texto={'Eliminar'} handleClick={() => this.handleItemDeleted(value, row)} />,
    }
  ];

  handleClickEditar = (value) => {
    alert('Editando :: ' + value.id);
  };

  handleClickEliminar = (value) => {
    alert('Eliminando :: ' + value.id);
  }

}

export default App;