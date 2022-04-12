import { TypedUseSelectorHook, useSelector } from "react-redux";
import { MainState } from "../store/reducers/mainReducer";


export const useTypedSelector: TypedUseSelectorHook<MainState> = useSelector;