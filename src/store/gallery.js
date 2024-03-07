import { createSlice } from '@reduxjs/toolkit';
import baby1 from '../assets/landPageImg/baby1.png';
import baby2 from '../assets/landPageImg/baby2.png';
import baby3 from '../assets/landPageImg/baby3.png';
import family1 from '../assets/landPageImg/family1.png';
import family2 from '../assets/landPageImg/family2.png';
import family3 from '../assets/landPageImg/family3.png';
import model1 from '../assets/landPageImg/model1.png';
import model2 from '../assets/landPageImg/model2.png';
import model3 from '../assets/landPageImg/model3.png';

const initialState = {
    galleries: [
        {
            id: 1,
            img: baby1
        },
        {
            id: 2,
            img: baby2
        },
        {
            id: 3,
            img: baby3
        },
        {
            id: 4,
            img: family1
        },
        {
            id: 5,
            img: family2
        },
        {
            id: 6,
            img: family3
        },
        {
            id: 7,
            img: model1
        },
        {
            id: 8,
            img: model2
        },
        {
            id: 9,
            img: model3
        }
    ]
}

const gallerySlice = createSlice({
    name: 'Gallery',
    initialState: initialState,
    reducers: {
        addImage: (state, action) => {
            state.galleries.push(...action.payload);
        }
    }
});

export default gallerySlice.reducer;
export const { addImage } = gallerySlice.actions;