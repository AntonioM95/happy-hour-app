import React, {Component} from 'react';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            side: null
        };
    }



    componentDidMount(){

    }

    render(){
        const { side } = this.state;
        return(
           <div>
               {side}
           </div>
        );
    }
}

export default SideBar;