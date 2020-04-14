import React, {Component} from 'react'
import HappyHour from '../../HappyHour'
import { BrowserRouter as Router, useHistory, withRouter, Route, Link,Redirect } from "react-router-dom";

import './Specials.css'

class Specials extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchResults : []
        }
    }

    componentDidMount(){
        console.log("mounted")
    }

    getAllData(){

    }
    
    render(){
        const {dataSet} = this.props;
        return(
            <div className="Specials-Container row">
                
                <div className= "col col-5 specials-wrapper ">
                    <div className="specials-wrapper">
                    <button type="button" className=" btn row card btn-block">
                    
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                        <div className="description row">
                        <div className="col col-10">
                        <h5 className="card-title">Restaurant title</h5>
                        
                        </div>
                        <span className="badge badge-success active-status">Active</span>
                        </div>
                        <p className="card-text">Todays Restaurant specials are</p>
                        </div>
                   
                    </button>
                    <button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button>
                <button type="button" className=" btn row card btn-block">
                    
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                        <div className="card-body">
                        <div className="description row">
                        <div className="col col-10">
                        <h5 className="card-title">Restaurant title</h5>
                        
                        </div>
                        <span className="badge badge-success active-status">Active</span>
                        </div>
                        <p className="card-text">Todays Restaurant specials are</p>
                        </div>
                   
                    </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button><button type="button" className=" btn row card btn-block">
                    
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                    <div className="description row">
                    <div className="col col-10">
                    <h5 className="card-title">Restaurant title</h5>
                    
                    </div>
                    <span className="badge badge-success active-status">Active</span>
                    </div>
                    <p className="card-text">Todays Restaurant specials are</p>
                    </div>
               
                </button>
                </div>
                </div>

                <div className="col col-7">
                    <div className="map-wrapper">
                         map
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Specials);