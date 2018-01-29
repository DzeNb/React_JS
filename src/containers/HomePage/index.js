import React, { Component } from 'react';

import Header from '../../components/Header/index.js';

import Botton from '../../components/Botton/Botton';

class HomePage extends Component {

  handleClickHeader = (item, index) => {
    console.log(index);
  }

  render() {
    return (
      <div className='HomePage'>
        <Botton />
      </div>
    );
  }
}

export default HomePage;