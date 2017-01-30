import React from 'react';
import Layout from './Layout';
import { Col, Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchData, setAdmin } from './actions';
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

const Body = ({ objects, setAdmin }) =>
  <tbody>
  {
    objects.map( (object) =>
    <tr key={object.name}>
      <td>{object.name}</td>
      <td>&nbsp;</td>
      <td><a onClick={ () => setAdmin(object.name) }>Set Admin</a></td>
    </tr>
  )}
  </tbody>

const App = ({ objects, loadData, setAdmin }) =>
  <Layout>
    <Col md={6}>
    <Button onClick={ () => loadData }>Refresh</Button>
      <Table responsive>
      <Header columns={['Name', 'Admin', 'Tool']} />
      <Body objects={ objects } setAdmin={ setAdmin } />
      </Table>
    </Col>
  </Layout>

const mapStateToProps = (state) => {
  return {
    objects: state.example.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => {
      dispatch(fetchData('http://localhost:3001/api/users'))
    },
    setAdmin: (name) => {
      dispatch(setAdmin(name))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
