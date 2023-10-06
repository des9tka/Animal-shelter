import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { useAppDispatchWithAction } from "../../hooks";

import {
    AnimalActionIntarface,
    AnimalSliceInterface,
    AnimalInterface,
} from "../../interfaces";
import { animalService } from "../../services";

const initialState: AnimalSliceInterface = {
    animals: [],
    animal: null,
    error: null,
    loading: false,
    nextPage: null,
    prevPage: null,
};

export type ReducerActionType = ReturnType<typeof createAsyncThunk>;

const getAllAnimals = createAsyncThunk<AnimalInterface[], void>(
    "animalSlice/getAllAnimals",
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await animalService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getAnimalById = createAsyncThunk<AnimalInterface, string>(
    "animalSlice/getAnimalById",
    async (id: string, { rejectWithValue }) => {
        try {
            const { data } = await animalService.getAnimalById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const postAnimal = createAsyncThunk<void, AnimalInterface>(
    "animalSlice/postAnimal",
    async (animal: AnimalInterface, { rejectWithValue }) => {
        try {
            await animalService.postAnimal(animal)
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const animalSlice = createSlice({
    name: "AnimalSlice",
    initialState,
    reducers: {
        setAllAnimals: (state, action: AnimalActionIntarface) => {
            state.animals = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAllAnimals.fulfilled, (state, action) => {
                state.animals.push(...action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(getAllAnimals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getAllAnimals.pending, (state) => {
                state.loading = true;
            })

            .addCase(getAnimalById.fulfilled, (state, action) => {
                state.animal = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getAnimalById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getAnimalById.pending, (state) => {
                state.loading = true;
            })

            .addCase(postAnimal.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })
            .addCase(postAnimal.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(postAnimal.pending, (state) => {
                state.loading = true;
            }),
});

const {
    reducer: animalReducer,
    actions: {},
} = animalSlice;

const animalSliceFuncs = {
    getAll: () => useAppDispatchWithAction(getAllAnimals),
    getById: (id: string) => useAppDispatchWithAction(getAnimalById, id),
    postAnimal: (animal: AnimalInterface) => useAppDispatchWithAction(postAnimal, animal),
};

export { animalSliceFuncs, animalReducer };
