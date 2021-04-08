import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'

export class Search extends Component {
  state={
    searchText:'',
    amount:15,
    apiUrl:'https://pixabay.com/api',
    apiKey:'20790928-d97012a6cef9258f16c0744ac',
    images:[]
  }
  render() {
    return (
      <div>
        <TextField name="Search text" value={this.state.searchText} onChange={this.onTextChange} floatingLabelText="Search for images" fullWidth={true}/>
      </div>
    )
  }
}

export default Search
