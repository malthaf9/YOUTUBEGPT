import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state, action) => {
            //hamburger menu is not open at current state
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state, action) => {
            state.isMenuOpen = false;
        }
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer;
