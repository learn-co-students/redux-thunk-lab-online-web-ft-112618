import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import fetchCats from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    
  }

  render() {
    console.log(this.props.cats)
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        { this.props.loading ? <p>Loading...</p> : <CatList catPics={this.props.cats}/>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    cats: state.cats.pictures,
    loading: state.cats.loading
  })
}

export default connect(mapStateToProps, {fetchCats})(App)
