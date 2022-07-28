const initHome = {
  webViewKabarUdang: [],
  kabarUdang: [],
  linkKabarUdang: [],
};

export const kabarUdangReducer = (state = initHome, action) => {
  if (action.type === 'SET_WEBVIEWKABARUDANG') {
    return {
      ...state,
      webViewKabarUdang: action.value,
    };
  }
  if (action.type === 'SET_KABARUDANG') {
    return {
      ...state,
      kabarUdang: action.value,
    };
  }
  if (action.type === 'SET_LINKKABARUDANG') {
    return {
      ...state,
      linkKabarUdang: action.value,
    };
  }

  return state;
};
