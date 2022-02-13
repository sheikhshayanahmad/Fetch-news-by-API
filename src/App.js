import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import NewsItem from './Component/NewsItem';
import News from './Component/News';

export default class  extends Component {
  render() {
    return (
      <div>
        <NavBar />
      <News />
     
      </div>
    )
  }
}
