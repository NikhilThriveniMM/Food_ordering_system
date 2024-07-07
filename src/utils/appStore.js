import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartItem
    }
});

export default appStore;