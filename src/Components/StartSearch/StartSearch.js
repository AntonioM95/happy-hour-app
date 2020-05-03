import React, { Component } from 'react';
import HappyHour from '../../HappyHour'
import { BrowserRouter as Router, useHistory, withRouter, Route, Link,Redirect } from "react-router-dom";
import './StartSearch.css'
import StatePicker from '../../Addons/StateSelector'

class StartSearch extends Component {
    constructor(props){
      super(props);
      this.state = {
           
      }
    }

handleSearchQuery = ({target}) =>{
   
    const { history } = this.state;
    const { handleSearch } = this.props;
    handleSearch();

    this.props.history.push('/specials')
    
    
}

render(){
    const {handleSearchChange } = this.props;
  return (
    <div className="StartSearch row d-flex justify-content-center">
        <form className="row">
            <div className="form-row">
                <div className="form-group col-md4">
                    <label for="inputCity">City</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputCity"
                            name="City"
                            onChange={(e) =>handleSearchChange(e)}
                        />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    {/* <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select> */}
                    <StatePicker 
                        id="inputState" 
                        onChange={(e) => handleSearchChange(e)}
                        name="State"
                    />
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="inputZip"
                            name="Zip"
                            onChange={(e) => handleSearchChange(e)}
                        />
                </div>
                
                <button type="button" onClick={this.handleSearchQuery} className="btn btn-primary btn-sm">Search</button>
                
            </div>
        </form>
    </div>
  );
}
}

export default withRouter(StartSearch);