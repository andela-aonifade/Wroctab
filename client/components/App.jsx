
import React, { PropTypes } from 'react';
import Header from './common/Header.jsx';
import FlashMessagesList from './flash/FlashMessagesList.jsx';

/**
 * App Component class is the entry point of the application
*/
class App extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
    $('.modal').modal();
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
    $('.dropdown-button').dropdown();
    $('ul.tabs').tabs();
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="overlay">
          <FlashMessagesList />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};


export default App;
