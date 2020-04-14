import React, { Component } from 'react';
import HappyHour from '../../HappyHour'
import { BrowserRouter as Router, useHistory, withRouter, Route, Link,Redirect } from "react-router-dom";


class StartSearch extends Component {
    constructor(props){
      super(props);
      this.state = {
           
      }
    }

handleSearchQuery = ({target}) =>{
   
    const { history } = this.state;
    const { handleSearch } = this.props;
    handleSearch("SOme data");

    this.props.history.push('/specials')
    
    
}

render(){
  return (
    <div className="StartSearch row justify-content-center align-self-center">
        <form>
            <div className="form-row">
                <div className="form-group col-md4">
                    <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                </div>
                <button type="button" onClick={this.handleSearchQuery} className="btn btn-primary mb-2">Search</button>
            </div>
        </form>
    </div>
  );
}
}

export default withRouter(StartSearch);