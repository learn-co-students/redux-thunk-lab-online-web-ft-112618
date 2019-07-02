
import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
          {this.props.loading ? <p>Loading</p> : <CatList catPics={this.props.cats} />}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    cats: state.cats.pictures,
    loading: state.cats.loading
  })
}

export default connect(mapStateToProps, { fetchCats })(App)