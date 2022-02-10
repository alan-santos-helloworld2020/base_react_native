import { createSlice } from "@reduxjs/toolkit";

export const clienteSlice = createSlice({
  name: "cliente",
  initialState: {
    cliente: {
      nome: null,
      telefone: null,
      email: null,
    },
  },
  reducers:{
      salvarReduce:(state,action)=>{
          state.cliente = action.payload
      }
  }
  
});

export const {salvarReduce} = clienteSlice.actions;
export default clienteSlice.reducer;
