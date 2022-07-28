const initialState = {
  searchRegion: [],
  region: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_FILTER':
      return {
        ...state,
        searchRegion: action.payload,
      };
    case 'SET_REGION':
      return {
        ...state,
        region: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
