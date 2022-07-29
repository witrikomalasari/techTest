const initialState = {
  searchRegion: [],
  region: [],
};

const searchReducer = (state = initialState, action) => {
  if (action.type === 'SEARCH_FILTER') {
    return {
      ...state,
      searchRegion: action.value,
    };
  }
  if (action.type === 'SET_REGION') {
    return {
      ...state,
      region: action.value,
    };
  }
  return state;
};
export default searchReducer;
