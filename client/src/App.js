/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from './Layout'
import { Col, Table, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchData, setAdmin } from './actions'
import './App.css'
/* eslint-enable no-unused-vars */
const Header = ({
  columns
}) => (
  <thead>
  <tr>
  { columns.map((name) => <th key={name}>{name}</th>)}
  </tr>
  </thead>
)

const SetAdmin = ({isAdmin, setAdmin}) => {
  if (isAdmin) {
    return <span>Admin</span>
  }
  return <a onClick={setAdmin } >Set Admin</a>
}

const Body = ({ objects, setAdmin }) =>
  <tbody>
  {
    objects.map((object) =>
    <tr key={object.name}>
      <td>{object.name}</td>
      <td><SetAdmin isAdmin={object.isAdmin} setAdmin={() => setAdmin(object.name)}/></td>
    </tr>
  )}
  </tbody>

const App = ({ objects, loadData, setAdmin }) =>
  <Layout>
    <Col md={6}>
    <Button onClick={ () => loadData }>Refresh</Button>
      <Table responsive>
      <Header columns={['Name', 'Admin']} />
      <Body objects={ objects } setAdmin={ setAdmin } />
      </Table>
    </Col>
  </Layout>

const mapStateToProps = (state) => {
  const adminName = state.example.adminName.name
  const users = state.example.data.map(user => Object.assign({}, user, {isAdmin: user.name === adminName}))
  console.log(users)
  return {
    objects: users
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

export default AppContainer
