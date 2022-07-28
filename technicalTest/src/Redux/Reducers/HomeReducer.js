const initHome = {
  dataSupplier: [],
  detailHarga: [],
  linkHargaUdang: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_SUPPLIER') {
    return {
      ...state,
      dataSupplier: action.value,
    };
  }
  if (action.type === 'SET_DETAILHARGA') {
    return {
      ...state,
      detailHarga: action.value,
    };
  }
  if (action.type === 'SET_LINKHARGAUDANG') {
    return {
      ...state,
      linkHargaUdang: action.value,
    };
  }

  return state;
};
