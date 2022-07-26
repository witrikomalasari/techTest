import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageNews, VerificationIcon} from '../../Assets';
import {Headers} from '../../Components';

const KabarUdang = ({navigation}) => {
  return (
    <View>
      <Headers
        title="Kabar Udang"
        type="icon-only"
        icon="arrowBack"
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <Text style={styles.txt}>
          Tambak Udang Berpotensi Mencemari Lingkungan
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.txt}>Jala</Text>
          <Text style={styles.txt}>|</Text>
          <Text style={styles.txt}>Wildan Gayuh Zulfikar</Text>
        </View>
        <Text style={styles.txt}>30 April 2020</Text>

        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.txt}>210</Text>
            <Text style={styles.txt}>Share</Text>
          </View>
          <VerificationIcon />
          <VerificationIcon />
          <VerificationIcon />
          <VerificationIcon />
        </View>
        <Image source={ImageNews} />
        <Text style={styles.txt}>
          Semakin hari budidaya semakin sulit. Ungkapan ini nampaknya cukup
          familiar di kalangan petambak udang di Indonesia, atau bahkan mungkin
          juga terjadi di Negara lain pusat penghasil udang. Berbagai tantangan
          terus menguji dunia budidaya udang mulai dari penyakit, efisiensi
          pakan, cuaca tidak menentu, fluktuasi harga udang, hingga kondisi alam
          yang sudah tidak lagi mendukung. Tetapi benarkah alam yang sudah tidak
          mendukung budidaya? Atau justru alam sudah terbebani dengan aktivitas
          manusia, termasuk aktivitas budidaya? Alam dan manusia sudah
          selayaknya berjalan beriringan. Manusia membutuhkan jasa alam dalam
          menyediakan sumber daya sebagai sumber kehidupan. Tetapi yang terjadi
          saat ini, keseimbangan alam telah bergeser karena jenuh oleh hasil
          samping aktivitas manusia. Dalam hal aktivitas budidaya, hasil samping
          (limbah) belum mendapat perhatian yang cukup dari kebanyakan petambak
          di Indonesia. Petambak masih pikir-pikir untuk membangun instalasi
          manajemen limbah terutama terkait modal dan keterbatasan lahan. Selain
          itu juga kurangnya pengetahuan untuk menerapkan manajemen limbah yang
          memberikan perubahan pada efektivitas budidaya. Petambak lebih memilih
          langkah praktis dengan langsung membuang air sisa budidaya langsung ke
          laut atau sungai. Padahal di dalamnya terkandung banyak sekali senyawa
          organik yang menjadi 'PR' bagi alam untuk mendaurnya. Berbicara
          mengenai keselarasan antara tambak dan lingkungan, ternyata tambak
          berpotensi menimbulkan beberapa permasalahan lingkungan jika tidak
          dikelola dengan bijak. Tambak menimbulkan sejumlah permasalahan
          lingkungan, diantaranya: Penggunaan pupuk dan pestisida berlebihan dan
          air hasil budidaya yang dibuang langsung ke lingkungan di sekitarnya
          yang menyebabkan eutrofikasi, Konversi lahan pertanian menjadi tambak
          udang, Konversi ekosistem pesisir termasuk hutan mangrove menjadi
          tambak udang, Persebaran penyakit ke populasi udang liar di alam,
          Sedimentasi atau pendangkalan di muara. Manajemen limbah, baik yang
          berupa padat maupun cair sebaiknya dilakukan selama budidaya
          berlangsung maupun setelah panen. Perlakuan terhadap limbah ini
          meliputi pengendapan partikel di dasar kolam, kemudian endapan
          dikeluarkan dari kolam, selanjutnya endapan diperlakukan untuk
          menurunkan konsentrasi limbah sebelum dibuang ke sungai atau laut.
          Limbah (cair atau padat) juga dapat digunakan untuk keperluan lain
          seperti untuk pupuk pertanian. Limbah utama dari tambak adalah amonia,
          biasanya ditemukan dengan konsentrasi yang tinggi di muara. Amonia
          (dan juga senyawa nitrogen lainnya: nitrat dan nitrit) berbahaya
          karena dapat menjadi pemicu eutrofikasi hingga blooming alga di laut
          atau muara. Limbah yang tidak diberi perlakuan sebelum dibuang juga
          dapat menyebarkan penyakit, terutama limbah buangan dari tambak yang
          mengalami penyakit pada udang budidayanya. Apalagi kebanyakan petambak
          mengandalkan air langsung dari alam/laut untuk budidaya. Pada akhirnya
          limbah akan dapat kembali ke tambak, dan menyebabkan beberapa masalah:
          Peningkatan penggunaan sarana prasarana perlakuan air laut sebelum
          masuk kolam budidaya Kemelimpahan mikroorganisme patogen (bakteri,
          parasit, virus) Peningkatan tingkat keparahan penyakit udang yang
          dapat menyerang Fluktuasi alkalinitas Peningkatan laju nitrifikasi
          Toksin algae, terutama golongan BGA dan Dinoflagellata Bukan tidak
          mungkin pada suatu masa, alam akan 'lelah' memberikan jasa ekologinya
          pada kita -khususnya pada proses budidaya- jika tidak memperhatikan
          keseimbangan dan kapasitas lingkungan. Meskipun, banyak juga petambak
          yang mulai peduli dengan tidak membuang langsung limbah budidayanya ke
          lingkungan dengan memberi perlakuan terlebih dahulu sebelum
          benar-benar dibuang ke lingkungan. Kepedulian semacam ini yang
          seharusnya juga dimiliki segenap pelaku budidaya udang di Indonesia,
          karena budidaya bukan hanya untuk saat ini tapi juga seterusnya hingga
          ke generasi berikutnya.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: 'black',
  },
});

export default KabarUdang;
