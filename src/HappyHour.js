import React from 'react'
import event from '../src/Scripts/event'
window.Models = [];
const registerModel = (model) => {
    window.Models.push(model);
    console.log(model)
};

const getModels = () => {
    return window.sideModels;
}

const renderModalComponent = (Component, title, props) => {
    const renderModalComponentPromise = new Promise((resolve) =>{
        window.dispatchEvent(
          new CustomEvent('renderModalComponent', {
              detail: {
                  Component,
                  props: props || {},
                  title: title || ''
              }
          })  
        );
    });

    return renderModalComponent;
}
const HappyHour = {
    getModels,
    registerModel,
    renderModalComponent,
    event
}



export default HappyHour;