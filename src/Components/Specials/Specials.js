import React, {Component} from 'react'
import HappyHour from '../../HappyHour'
import { BrowserRouter as Router, useHistory, withRouter, Route, Link,Redirect } from "react-router-dom";
import SpecialsFeed from '../../Addons/SpecialsFeed';
import './Specials.css';
import Modal from '../Modals/Modal1'
import RestaurantDetails from '../../Addons/RestaurantDetailsModal'
import TestClass from '../../Models/RestaurantDetails/RestaurantDetails'
import Map from '../../HOC/GoogleMaps'
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
                   
                </div>

                <div >
                    <div className="col" style={{width: '30vw', height: '80vh'}}>
                     <Map 
                            googleMapURL= {'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCU_9a20rCg5bIT3nWQTFftAZB9EDc8qNc'}
                            loadingElement = {<div style = {{ height: "100%"}}></div>}
                            containerElement = {<div style = {{ height: "100%"}}> </div>}
                            mapElement = { <div style = {{ height: "100%"}}></div>}
                        >
                        </Map>
                        </div>  
                   
                </div>

               

            </div>
        )
    }
}

export default withRouter(Specials);