import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRegister {
    email: string;
    otp: string;
}

const initialState: IRegister = {
    email: '',
    otp: '',
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<{ email: string }>) {
            state.email = action.payload.email;
        },
        setOtp(state, action: PayloadAction<{ otp: string }>) {
            state.otp = action.payload.otp;
        },
        resetRegister(state) {
            state.email = '';
            state.otp = '';
        },
    },
});

export const { resetRegister, setEmail, setOtp } = registerSlice.actions;
export default registerSlice.reducer;
