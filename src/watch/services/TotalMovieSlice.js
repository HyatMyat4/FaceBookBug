import { createSlice } from  '@reduxjs/toolkit';


const initialState = {
    TotalMovie : [] ,    
}

export const TotalMovieSlice = createSlice({
        name : 'TotalMovie',
        initialState,
        reducers: {
            AddMovie: (state , actions ) => {
                state.TotalMovie = actions.payload 
                
            },       
        

        }
})

export const { AddMovie } = TotalMovieSlice.actions;



export const  TotalMovieC = (state) => state.TotalMovie.TotalMovie;



export default TotalMovieSlice.reducer;
