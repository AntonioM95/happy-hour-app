import React, {Component} from 'react';

class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            navigation: null
        };
    }



    componentDidMount(){

    }

    render(){
        const { navigation } = this.state;
        return(
           <div className="Navigation-wrapper">
               This is the nav
           </div>
        );
    }
}

export default NavigationBar;