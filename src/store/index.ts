import { configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
  user: user.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

let initialRootState: RootState;

// SSR
const reducer = (state: any, action: any) => {
  if ((action.type = HYDRATE)) {
    if (state === initialRootState) {
      return {
        ...state,
        ...action.payload,
      };
    }

    return state;
  }

  return rootReducer(state, action);
};

// 타입 지원 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
  const store = configureStore({
    reducer,
    devTools: true,
  });

  initialRootState = store.getState();
  return store;
};

export const wrapper = createWrapper(initStore);
