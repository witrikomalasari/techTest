const initHome = {
  regions: [],
  searchRegion: [],
};

export const regionReducer = (state = initHome, action) => {
  if (action.type === 'SET_REGIONS') {
    return {
      ...state,
      regions: action.value,
    };
  }
  if (action.type === 'SEARCH_FILTER') {
    return {
      ...state,
      searchRegion: action.value,
    };
  }

  return state;
};
