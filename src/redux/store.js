import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store = configureStore({
    reducer:{ //reducer is required yani başka isim verilemez.
        //burası state e gönderilen data olacak.
        counter:counterReducer,
    }
});