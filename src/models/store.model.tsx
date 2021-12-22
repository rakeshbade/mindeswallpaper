import { Action } from "redux";
import { ColorPaletteModel } from "./color.model";
import PatternModel from "./pattern.model";
interface StateModel {
    color:ColorPaletteModel,
    pattern: PatternModel
}

interface ActionModel extends Action{
    value: any
}

export type {StateModel, ActionModel};