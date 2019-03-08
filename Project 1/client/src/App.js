import React, { Component } from 'react';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './components/item-modal'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
