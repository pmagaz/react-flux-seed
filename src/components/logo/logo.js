import React, { Component } from 'react';
import ReactBaseActions from '../../actions';

class ReactBaseLogo extends React.Component {

  render() {
    return (
        <img onClick={ReactBaseActions.addItem.bind(null,'hola')} src="./logo.png" alt="ReactBase" width="300" />
    );
  }

}

export default ReactBaseLogo
