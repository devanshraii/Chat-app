import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedConversation: null,
  messages: [],
};

const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setSelectedConversation, setMessages } =
  conversationsSlice.actions;
export default conversationsSlice.reducer;
