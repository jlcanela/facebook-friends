import React, { Component} from 'react';
import { Layout, Header, Navigation, Drawer, Content, HeaderRow, Textfield } from 'react-mdl';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header waterfall>
            <HeaderRow title="Title">
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                />
            </HeaderRow>
            <HeaderRow>
                <Navigation>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                    <a href="">Link</a>
                </Navigation>
            </HeaderRow>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
