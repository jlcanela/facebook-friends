import React from 'react';
import Layout from './Layout';
import { Col, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import './App.css';

const Header = ({
  columns
}) => (
  <thead>
  <tr>
  { columns.map((name) => <th key={name}>{name}</th> )}
  </tr>
  </thead>
);

const Body = ({ objects }) =>
  <tbody>
  { objects.map( (object) =>
    <tr key={object.id}>
      <td>{object.name}</td>
      <td>&nbsp;</td>
      <td><a onClick={ () => {
        console.log('set admin');
      }
      }>Set Admin</a></td>
    </tr>
  )}
  </tbody>

const App = ({ objects, loadData }) =>
  <Layout>
    <Col md={6}>
    <Button onClick={ () => loadData }>Refresh</Button>
      <Table responsive>
      <Header columns={['Name', 'Admin', 'Tool']} />
      <Body objects={ objects } />
      </Table>
    </Col>
  </Layout>

const mapStateToProps = (state) => {
  console.log(state);
  return {
    objects: state.example.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(fetchData('http://localhost:3001/api/users'))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
