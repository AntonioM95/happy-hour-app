import React, {Component} from 'react';

class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {
            modal: null
        };
    }



    componentDidMount(){

    }

    render(){
        const { modal } = this.state;
        return(
           <div>
               {modal}
           </div>
        );
    }
}

export default Modal;