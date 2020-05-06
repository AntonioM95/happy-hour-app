import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar';
import MainDisplay from '../MainDisplay/MainDisplay';
import HappyHour from '../../HappyHour';
import StartSearch from '../../Components/StartSearch/StartSearch';
import Specials from '../../Components/Specials/Specials'
import Footer from '../../Controllers/Footer/Footer';
import Modal from '../../Components/Modals/Modal1'
import './Main.css'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainWindow: null,
            mainDataSet: null,
            searchDetails: [], 
            AppModal: null
        }
    }
    

    componentDidMount(){
        HappyHour.event.on('renderModalComponent', 
        (event) => {
            console.log(event.detail)
            this.setState({AppModal: null},
                () => {
                    this.setState({AppModal: event.detail})
                }, 
                () => {
                    HappyHour.event.trigger('renderModalComponent-done');
                })
        }, 'isNative')
    }

    handleSearch = () =>{
        const { searchDetails } = this.state;
        console.log(searchDetails);
    }

    handleModalClose =() => {
        this.setState({AppModal: false})
    }

    handleSearchChange = (event) =>{
        const { searchDetails } = this.state;

        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(name, " : ", value);
        
        searchDetails[name] = value;
        this.setState({searchDetails});
    }
    render(){
        const { mainWindow, mainDataSet, AppModal } = this.state;
        
        return(
            <div className="container">
            <NavigationBar></NavigationBar>
            <div className="Main-Wrapper vertical-center">
                <Route path="/" exact render = {(props) => <StartSearch {...props}
                    handleSearch={(e) => this.handleSearch(e)}
                    handleSearchChange={ (e) => this.handleSearchChange(e)}
                />}
                />
                
                <Route path="/specials" exact render = {(props) => <Specials {...props}
                    handleSearch={(e) => this.handleSearch(e)}
                    dataSet = {mainDataSet}
                    handleSearchChange={ (e) => this.handleSearchChange(e)}
                />}
                />
            </div>
           
            {/* <MainDisplay
                getModels = {HappyHour.getModels()}
                dataSet = {mainDataSet}
            ></MainDisplay> */}
             {!AppModal ? null: <Modal options = {AppModal} handleModalClose ={() => this.handleModalClose()}/>}
            <Footer></Footer>
            </div>
        )
    }
}

export default Main;