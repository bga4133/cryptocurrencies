import { API_REQUEST, API_FAILED, API_SUCCESS } from '../actionTypes';

export const apiRequest = () => ({
  type: API_REQUEST
});

export const apiSuccess = (data) => ({
  type: API_SUCCESS,
  data
});

export const apiRequestFailed = (data) => ({
  type: API_FAILED,
  data
});
