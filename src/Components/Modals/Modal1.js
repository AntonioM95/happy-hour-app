import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HappyHour from '../../HappyHour';
//mport HappyHour from '../../HappyHour';
//import Icon from '../../components/Icon/Icon';
import './Modal.css';

class Modal extends Component {  
    constructor(props) {    
        super(props);    
        this.state = {      
            open: false   
        };  
    }
  
    componentDidMount() {    
        this.toggleModal();    
        this.handleFillScreen();
    }

    componentDidUpdate() {    
        this.toggleModal();
        
    }
  
//     getHeaderRegistry() {    
//         const { options } = this.props;    
//         const { props } = options;    
//         const addons = HappyHour.getAddons(props.headerRegistry || 'Modal.header');    
//         return addons.map((Addon, i) => (      
//         <Addon key={HappyHour.index(i)} modalProps={props} />    
//         )); 
//     }

    toggleModal(close) {    
        const { open} = this.state;    
        const { options, handleModalClose} = this.props;    
        if ( close) {      
            this.setState({        
                open: !open    
            }, () => handleModalClose());    
        } 

       

    }

    handleFillScreen() {
        const { options } = this.props;
        const { props } = options;

        console.log(props.fillscreen);
        const setter = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            this.setState({
                styles: {
                    width: w - 100,
                    height: h - 50
            }})
        }

        if(props.fillscreen){
            setter();

        }
    }

    

    render() {    
    const { options, fillscreen } = this.props;    
    const { open, styles} = this.state;    
    const { title, Component: BodyComponent, props } = options;
    console.log(styles)
    return !BodyComponent ? null : (      
        <div        
                   
            className={`modal d-block ${props.fillscreen ? 'modal-fillscreen' : ''}`} 
        >        
            <div          
                className="modal-dialog"          
                role="document"
                style={{
                    ...styles,
                    ...props.styles
                }}
            >       
                <div            
                    className={`modal-content`}            
                   
                >            
                               
                        <div className="modal-header">                
                            <h5 className="modal-title">                                                        
                                {title}                                 
                            </h5>                
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => this.toggleModal(true)}>
                                <span aria-hidden="true">&times;</span>
                            </button>             
                        </div>            
                                
                    <div              
                        className={`modal-body`}              
                                   
                    >      
                         
                        {BodyComponent ? (                
                            <BodyComponent {...props.componentProps} />              
                        ) : null}            
                        </div>            
                       
                    </div>        
                </div>      
            </div>    
        );  
    }
}
Modal.propTypes = {  options: PropTypes.object.isRequired};
export default Modal;
