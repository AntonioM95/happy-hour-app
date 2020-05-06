import event from './HappyHour-event'

window.Models = [];
const registerModel = (model) => {
    window.Models.push(model);
    console.log(model)
};

const getModels = () => {
    return window.sideModels;
}

const renderModalComponent = (Component, title, props) => {
    const renderModelComponentPromise = new Promise((resolve) => {
        console.log(Component)
        window.dispatchEvent(
            new CustomEvent("renderModalComponent", {
                detail: {
                    Component,
                    props: props || {},
                    title: title || ""
                }
            }
        ));
        event.on('renderModalComponent-done', () =>{
            resolve(window.document.getElementById('HappyHourModalComponent'));
        })
    });

    return renderModelComponentPromise;
}
const HappyHour = {
    getModels,
    registerModel,
    renderModalComponent,
    event
}

export default HappyHour;