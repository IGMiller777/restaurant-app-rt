import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";
import { REQUEST_STATUSES } from "../../../../constants/statuses";

export const loadUserIfNotExist = createAsyncThunk(
    'users/loadUserIfNotExist',
    async (_, {getState, rejectWithValue}) => {
        const state = getState();

        if (selectUserIds(state)?.length) {
            return rejectWithValue(REQUEST_STATUSES.earlyLoaded);
        }

        const response = await fetch('http://localhost:3001/api/users/');

        return await response.json();
    }
)