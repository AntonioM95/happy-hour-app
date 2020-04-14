import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavigationBar from '../Navigation/NavigationBar';
import MainDisplay from '../MainDisplay/MainDisplay';
import HappyHour from '../../HappyHour';
import StartSearch from '../../Components/StartSearch/StartSearch'
import Footer from '../../Controllers/Footer/Footer'
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            mainWindow: null,
            mainDataSet: null
        }
    }
    

    componentDidMount(){
        
    }

    handleSearch = (dataset) =>{
        console.log(dataset)
        this.setState({mainDataSet: dataset});
    }


    render(){
        const { mainWindow, mainDataSet } = this.state;
        
        return(
            <div className="container">
            <NavigationBar></NavigationBar>
            <Route path="/" exact render = {(props) => <StartSearch {...props}
                handleSearch={(e) => this.handleSearch(e)}
            />}
            />

           
            <MainDisplay
                getModels = {HappyHour.getModels()}
                dataSet = {mainDataSet}
            ></MainDisplay>

            <Footer></Footer>
            </div>
        )
    }
}

export default Main;