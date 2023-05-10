export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

const setLoading = () => ({
  type: REQUEST_API
});

const setImg = (payload) => ({
  type: GET_PICTURE,
  payload
});

export const fetchAPI = () => {
  return (dispatch) => {
    dispatch(setLoading());
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then(([data]) => dispatch(setImg(data.url)))
      .catch((error) => dispatch(setImg(error.message)));
  };
}




