window.Models = [];
const registerModel = (model) => {
    window.Models.push(model);
    console.log(model)
};

const getModels = () => {
    return window.sideModels;
}

const HappyHour = {
    getModels,
    registerModel
}

export default HappyHour;