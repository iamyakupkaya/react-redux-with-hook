import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    //Creating a slice requires a string name to identify the slice, an initial state value, 
    //and one or more reducer functions to define how the state can be updated.
    name:"counter", //slice ı tanımlayan bir isimdir.. Aslında buradaki name değeri action type değerini belirlemede yardımcı olur
    //yani gönderilen action type:counter/increment ya da counter/decrement şeklinde göndeirlir. 
    initialState:{ // bu ismin initialState olması zorunludur.
        value:0,
    },
    // bu ismin reducers olması zorunludur.
    reducers:{ // stati güncelleyecek olan tanımlar
        //burada statei güncelleycek fonksiyonlar yazarım
        increment: (state, action) => {
            console.log("yaz action", action);
            state.value +=action.payload;},
        decrement: (state) => {state.value -=1;},
    } 
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer; // not reducers be carefull
 // bunu store.js e kullanacağız..
