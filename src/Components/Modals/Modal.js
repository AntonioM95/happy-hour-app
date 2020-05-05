import React, { Component } from 'react';
import PropTypes from 'prop-types';
//mport HappyHour from '../../HappyHour';
//import Icon from '../../components/Icon/Icon';
//import './Modal.css';
import HappyHour from '../../HappyHour'
class Modal extends Component {  
    constructor(props) {    
        super(props);    
        this.state = {      
            open: false
        };  
    }
  
    componentDidMount() {    
        this.toggleModal();    
        this.handelFillscreen();

        const { options } = this.props;    
        const { props } = options;    
        // if (props.ModalInitialAction) {     
        //      props.ModalInitialAction();    
        // }
        HappyHour.event.on('exitModalComponent', () => {      
            this.setState({        
                open: false      
            });    
        });  
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
        const { open } = this.state;    
        const { options } = this.props;    
        if (close) {      
            this.setState({        
                open: !open  
            });    
        }  
    }

    handelFillscreen() {    
        const { options } = this.props;    
        const { props } = options;    
        const setter = () => {      
            const w = window.innerWidth;      
            const h = window.innerHeight;      
            this.setState({        
                styles: {          
                    width: w - 100,          
                    height: h - 50        
                }      
            });    
        };    
        if (props.fillscreen) {      
            setter();      
            HappyHour.event.on('resize-end', () => setter());    
        }  
    }

    render() {    
    const { options } = this.props;    
    const { open, styles } = this.state;    
    const { title, Component: BodyComponent, props } = options;    
    return !BodyComponent ? null : (      
        <div        
            id="HappyHourModalComponent"        
            className={`modal ${open ? 'd-block' : 'd-none'} modal-fillscreen `}        
                tabIndex="-1"        
                role="dialog"      
        >        
            <div          
                className="modal-dialog"          
                role="document"          
                style={{            
                    ...props.styles,            
                    ...styles          
                }}        
            >          
                <div            
                    className={`modal-content ${props.contentClassName}`}            
                    style={props.contentStyles}          
                >            
                    {title === false ? null : (              
                        <div className="modal-header">                
                        <h5 className="modal-title">                  
                        {/* {props.icon ? <Icon src={props.icon} /> : null}                   */}
                        {title}                 
                        <div className="d-inline-block modal-header-registry">                    
                            {/* {this.getHeaderRegistry()}                   */}
                            </div>                
                            </h5>                
                            <button                  
                                type="button"                  
                                className="close"                  
                                data-dismiss="modal"                  
                                aria-label="Close"                  
                                onClick={() => this.toggleModal(true)}                  
                                disabled={props.preventClose}                
                            >                  
                                <span aria-hidden="true">&times;</span>                
                            </button>              
                        </div>            
                    )}            
                    <div              
                        className={`modal-body ${props.bodyClassName || ''}`}              
                        style={{                
                            padding: props.padding || '1rem',                
                            ...props.bodyStyles              
                        }}           
                    >              
                        {BodyComponent ? (                
                            <BodyComponent {...props.componentProps} />              
                        ) : null}            
                        </div>            
                        {!props.Buttons ? null : (              
                            <div className="modal-footer">                
                            {props.Buttons.map((BTN, i) => (                  
                                <BTN key={HappyHour.index(i)} />                
                            ))}              
                            </div>            
                        )}          
                    </div>        
                </div>      
            </div>    
        );  
    }
}
Modal.propTypes = {  options: PropTypes.object.isRequired};
export default Modal;
