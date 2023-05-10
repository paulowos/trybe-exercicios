export const SET_LOADING = 'SET_LOADING';
export const SET_INFOS = 'SET-INFOS';

const setLoading = () => ({
  type: SET_LOADING
});

const setInfos = (payload) => ({
  type: SET_INFOS,
  payload
});

export const getInfos = (input) => {
  return (dispatch) => {
    dispatch(setLoading());
    fetch(`https://anapioficeandfire.com/api/characters?name=${input}`)
      .then((response) => response.json())
      .then(([data]) => {
        const infos = {
          name: data.name,
          culture: data.culture,
          titles: data.titles,
          aliases: data.aliases
        };
        dispatch(setInfos(infos));
      })
      .catch((error) => {
        const infos = { name: error.message, culture: '', titles: [], aliases: [] };
        dispatch(setInfos(infos));
      });
  };
};