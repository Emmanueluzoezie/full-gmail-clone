import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';


const initialState = {
  user:null
}

export const userSlice = createSlice({
  name: "user",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => void(state.user = action.payload),

    logout: (state) => void(state.user = null)
  },
})
  

export const { login, logout } = userSlice.actions;
export const selectedUser = (state:any) => state.user.user

export default userSlice.reducer;
