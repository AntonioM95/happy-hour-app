import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar';
import MainDisplay from '../MainDisplay/MainDisplay';
import HappyHour from '../../HappyHour';
import StartSearch from '../../Components/StartSearch/StartSearch';
import Specials from '../../Components/Specials/Specials'
import Footer from '../../Controllers/Footer/Footer';
import './Main.css'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainWindow: null,
            mainDataSet: null,
            searchDetails: [],
            showModal: false
        }
    }
    

    componentDidMount(){
        
    }
    
    showModal = e => {
        this.setState({
          show: true
        });
    };

    handleSearch = () =>{
        const { searchDetails } = this.state;
        console.log(searchDetails);
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
        const { mainWindow, mainDataSet } = this.state;
        
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

            <Footer></Footer>
            </div>
        )
    }
}

export default Main;