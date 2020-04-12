import React, { Component } from 'react';
import { Spinner } from '../../atoms';
import { Navbar } from '../../organisms/';
import { getUserData } from '../../../helpers/functions';

class Main extends Component {
  render() {
    const userData = getUserData();
    return <>{userData ? <Navbar /> : <Spinner />}</>;
  }
}

export default Main;
