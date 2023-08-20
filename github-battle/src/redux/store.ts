import {configureStore, Middleware} from '@reduxjs/toolkit';
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";
//@ts-ignore
import {createLogger} from "redux-logger";
import rootReducer from "./rootReducer";

const logger: Middleware = createLogger({
    collapsed: true
})

const store: ToolkitStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;
