import { createSlice } from '@reduxjs/toolkit';
import {
  LoadingStatus,
  TaskInitialStateType,
} from './types';
import {
  getTasksAsyncAction,
  postTaskAsyncAction,
  updateTaskAsyncAction,
} from './asyncActions/asyncActions';

const initialState: TaskInitialStateType = {
  tasks: [],
  fetchingTasks: LoadingStatus.idle,
  addingTasks: LoadingStatus.idle,
  updatingTasks: LoadingStatus.idle,
  error: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTasksAsyncAction.pending,
      (state) => {
        state.fetchingTasks = LoadingStatus.pending;
        state.error = '';
      },
    );
    builder.addCase(
      getTasksAsyncAction.fulfilled,
      (state, action) => {
        state.tasks = action.payload;
        state.fetchingTasks = LoadingStatus.succeeded;
      },
    );
    builder.addCase(
      getTasksAsyncAction.rejected,
      (state, action) => {
        state.fetchingTasks = LoadingStatus.failed;
        state.error = action.error.message;
      },
    );
    builder.addCase(
      postTaskAsyncAction.pending,
      (state) => {
        state.addingTasks = LoadingStatus.pending;
        state.error = '';
      },
    );
    builder.addCase(
      postTaskAsyncAction.fulfilled,
      (state, action) => {
        state.tasks.push(action.payload);
        state.addingTasks = LoadingStatus.succeeded;
      },
    );
    builder.addCase(
      postTaskAsyncAction.rejected,
      (state, action) => {
        state.addingTasks = LoadingStatus.failed;
        state.error = action.error.message;
      },
    );
    builder.addCase(
      updateTaskAsyncAction.pending,
      (state) => {
        state.updatingTasks = LoadingStatus.pending;
        state.error = '';
      },
    );
    builder.addCase(
      updateTaskAsyncAction.fulfilled,
      (state, action) => {
        state.tasks = state.tasks.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
        state.updatingTasks = LoadingStatus.succeeded;
      },
    );
    builder.addCase(
      updateTaskAsyncAction.rejected,
      (state, action) => {
        state.updatingTasks = LoadingStatus.failed;
        state.error = action.error.message;
      },
    );
  },
});

export default tasksSlice.reducer;
