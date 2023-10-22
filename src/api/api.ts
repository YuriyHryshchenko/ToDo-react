import axios, { AxiosResponse } from 'axios';
import {
  GetTasksResponseType,
  PostTaskResponseType,
  PostTaskType,
  UpdateTaskResponseType,
} from './types';

export const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});
export const postTask = async (
  task: PostTaskType,
): Promise<AxiosResponse<PostTaskResponseType>> => {
  return instance.post('/tasks', task);
};
export const getTasks = async (): Promise<
  AxiosResponse<GetTasksResponseType>
> => {
  return instance.get('/tasks');
};
export const updateTask = async (
  id: string,
  status: string,
): Promise<AxiosResponse<UpdateTaskResponseType>> => {
  return instance.put(`/tasks`, { id, status });
};
