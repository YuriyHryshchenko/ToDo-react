import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTasks,
  postTask,
  updateTask,
} from '../../../api/api';
import { AxiosError } from 'axios';
import { PostTaskType } from '../../../api/types';
import { UpdateTaskOtionsType } from '../types';

export const getTasksAsyncAction = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTasks();
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  },
);

export const postTaskAsyncAction = createAsyncThunk(
  'tasks/postTask',
  async (task: PostTaskType, { rejectWithValue }) => {
    try {
      const response = await postTask(task);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  },
);

export const updateTaskAsyncAction = createAsyncThunk(
  'tasks/updateTask',
  async (
    options: UpdateTaskOtionsType,
    { rejectWithValue },
  ) => {
    const { id, status } = options;
    try {
      const response = await updateTask(id, status);
      return response.data;
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  },
);
