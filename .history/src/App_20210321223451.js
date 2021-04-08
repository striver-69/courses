import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Navbar/>
        <Search/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
