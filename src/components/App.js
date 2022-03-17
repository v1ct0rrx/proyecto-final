import React, { Component } from 'react';
import Tabla from 'rc-table';
import Boton from './Boton';
import '../css/index.css';


class App extends Component {

  state = {
    contacts: []
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
      <Tabla columns={this.columns} data={this.state.contacts} />
    )
  }

  columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
      width: 200,
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: 'Editar',
      dataIndex: '',
      key: 'operations',
      render: (value) => <Boton texto={'Editar'} handleClick={() => this.handleClickEditar(value)} />,
    },
    {
      title: 'Eliminar',
      dataIndex: '',
      key: 'operations',
      render: (value) => <Boton texto={'Eliminar'} handleClick={() => this.handleClickEliminar(value)} />,
    }
  ];

  handleClickEditar = (value) => {
    alert('Editar');
  };

  handleClickEliminar = (value) => {
    alert('Eliminar');
    const index = this.state.contacts.indexOf(value, 0);
    this.state.contacts.splice(index, 1);
  }

}

export default App;