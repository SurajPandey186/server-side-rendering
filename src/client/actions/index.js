export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch({
    payload: res,
    type: FETCH_USERS
  })
};

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    payload: res,
    type: FETCH_CURRENT_USER
  })
}

export const FETCH_ADMINS = 'FETCH_ADMINS';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    payload: res,
    type: FETCH_ADMINS
  })
}