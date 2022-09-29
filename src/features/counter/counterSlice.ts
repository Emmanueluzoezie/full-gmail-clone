import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';
import {MailRowType } from "../../pages/Inbox"

export interface MailItem {
  selectedMail: MailRowType,
}

const initialState:MailItem = {
  selectedMail:{
    recipients: "",
    subject: "",
    description: "",
    // image: "",
  }
}

export const mailSlice = createSlice({
  name: "mail",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state, action: PayloadAction<MailRowType>) => void(state.selectedMail = action.payload)
  },
})
  

export const { selectMail } = mailSlice.actions;

export default mailSlice.reducer;
