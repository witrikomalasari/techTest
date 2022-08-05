const initHome = {
  webViewKabarUdang: [],
  kabarUdang: [],
  linkKabarUdang: [],
  avatar: [],
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
  if (action.type === 'SET_AVATAR') {
    return {
      ...state,
      avatar: action.value,
    };
  }
  return state;
};
