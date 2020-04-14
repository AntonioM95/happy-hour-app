import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class MainDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    

    componentDidMount(){
        
    }


    render(){
        const { mainWindow } = this.state;
        const { dataSet} = this.props;
        const routes = window.Models;

        const routeList = routes.map((route, index) =>{
            return(
                <Route
                    exact
                    key={route.title+index}
                    path={route.path}
                    render={(props) =>
                    (
                        <route.Component 
                            dataSet={dataSet}
                        ></route.Component>
                    )               
                    }
            
                ></Route>
            )
        });
       
        return(
            <div className= "Main-Wrapper border" id="Main">
                <Switch>{routeList}</Switch>
            </div>
        )
    }
}

export default MainDisplay;