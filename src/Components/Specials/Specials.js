import React, {Component} from 'react'
import HappyHour from '../../HappyHour'
import { BrowserRouter as Router, useHistory, withRouter, Route, Link,Redirect } from "react-router-dom";
import SpecialsFeed from '../../Addons/SpecialsFeed';
import './Specials.css';
import Modal from '../Modals/Modal1'
import RestaurantDetails from '../../Addons/RestaurantDetailsModal'
import TestClass from '../../Models/RestaurantDetails/RestaurantDetails'
class Specials extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchResults : [],
            AppModal: null
        }
    }

    componentDidMount(){
        console.log("mounted")

        // HappyHour.event.on('renderModalComponent', 
        // (event) => {
        //     console.log(event.detail)
        //     this.setState({AppModal: null},
        //         () => {
        //             this.setState({AppModal: event.detail})
        //         })
        // }, 'isNative')
    }

    getAllData(){
        
    }

    componentDidUpdate(){
        
      
    }

    onRestaurantDetail(){
        HappyHour.renderModalComponent(TestClass, "Some Title", {fillscreen: true});
    }
    
    render(){
        const {dataSet, AppModal} = this.state;
        console.log(AppModal, "kdfjdlkjf");
        return(
            <div className="Specials-Container row">
                
                <div className= "col col-5 specials-wrapper ">
                    <SpecialsFeed 
                        onRestaurantClick = {(e) => this.onRestaurantDetail(e)}>

                    </SpecialsFeed>
                    {/* <div className="specials-wrapper">
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
                </div> */}
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