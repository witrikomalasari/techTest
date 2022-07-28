const initHome = {
  webViewListPenyakit: [],
  listPenyakit: [],
  linkListPenyakit: [],
};

export const ListPenyakitReducer = (state = initHome, action) => {
  if (action.type === 'SET_WEBVIEWLISTPENYAKIT') {
    return {
      ...state,
      webViewListPenyakit: action.value,
    };
  }
  if (action.type === 'SET_LISTPENYAKIT') {
    return {
      ...state,
      listPenyakit: action.value,
    };
  }
  if (action.type === 'SET_LINKLISTPENYAKIT') {
    return {
      ...state,
      linkListPenyakit: action.value,
    };
  }

  return state;
};
