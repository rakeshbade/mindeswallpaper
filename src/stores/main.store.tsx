import { combineReducers, createStore } from 'redux';
import { ColorPaletteModel } from '../models/color.model';
import PatternModel from '../models/pattern.model';
import { ActionModel } from '../models/store.model'
import { createColorPalette } from '../services/color.service';
const initalColor: ColorPaletteModel = {
    background: "",
    pattern: "",
    text: ""
}

const initialPattern:PatternModel = {
    name: "",
    id: "",
    mode: "",
    value: "",
};



const colorReducer = (currentState: ColorPaletteModel = initalColor, action: ActionModel) => {
    switch (action.type) {
        case "color":
            const newColor = createColorPalette(action.value);
            return {...newColor};
        default: return currentState;
    }
}

const patternReducer = (currentState: PatternModel = initialPattern, action: ActionModel) => {
    switch (action.type) {
        case "pattern":
            return {...action.value};
        default: return currentState;
    }
}



const reducers = combineReducers({
    colorReducer,
    patternReducer
});

const MainStore = createStore(reducers);

MainStore.subscribe(() => {
    //console.log('current state', MainStore.getState());
});

export default MainStore;