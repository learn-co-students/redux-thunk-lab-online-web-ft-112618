import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <ul>{
          this.props.loading ? <li>LOADING...</li> : <CatList catPics={this.props.catPics}/>
        }

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.catsReducer.pictures,
    loading: state.catsReducer.loading      
  }
}

export default connect(mapStateToProps, {fetchCats})(App)
