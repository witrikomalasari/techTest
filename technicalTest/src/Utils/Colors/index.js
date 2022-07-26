const mainColors = {
  blue1: '#1B77DF',
  blue2: '#004492',
  blue3: '#859ED1',
  dark1: '#363637',
  grey1: '#454646',
  grey2: '#E5E5E5',
  grey3: '#737373', // tulisan topTAB
  cream1: '#FFF8E7', // kotak enable
  black: '#000000',
  white: '#ffffff',
};

export const colors = {
  //background
  primary: mainColors.blue1,
  secondary: mainColors.blue2,
  third: mainColors.blue3,
  white: mainColors.white,
  grey: mainColors.grey2,

  text: {
    title: mainColors.blue2, // harga terbaru, tombol kotak size, txt daftar penyakit
    subTitle: mainColors.blue1, // primer, tutup, tombol
    blue: mainColors.blue3, // tanggal + txt SIZE
    primary: mainColors.grey3,
    secondary: mainColors.dark1, // tulisan modal size + harga size
    third: mainColors.grey1,
    white: mainColors.white,
    black: mainColors.black,
  },

  button: {
    primary: {
      background: mainColors.blue1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.blue2,
      text: mainColors.white,
    },
    third: {
      background: mainColors.cream1,
      text: mainColors.grey1,
    },
    disable: {
      background: mainColors.grey2, // kotak disable
      text: mainColors.grey1,
    },
  },

  border: {
    primary: mainColors.grey2, // disable
  },

  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
