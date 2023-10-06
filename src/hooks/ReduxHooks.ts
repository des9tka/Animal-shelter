import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

function useAppDispatchWithAction(action: any, payload?: any) {
    const dispatch = useAppDispatch();
    return () => dispatch(action(payload));
}

export { useAppSelector, useAppDispatchWithAction };
