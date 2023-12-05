<template>
  <div style="margin-top: 64px">
    <div>
      <Hero />
    </div>
    <div>
      <Contenwithimg :imgSrc="'assets/images/bg2.jpeg'" />
    </div>
    <div>
      <Banner :backgroundSrc="'assets/images/background2.jpg'" />
    </div>
    <div>
      <v-container class="d-flex justify-center flex-column align-center">
        <H2 :h2Title="'GURU SMPK RONGGOLAWE TUBAN'" />
        <P :pTitle="'Para Staff dan Guru yang berkompeten di bidang Ilmu Pengetahuan dan Mata Pelajaran'" />
        <CardwithOverlay :arrayData="pegawai" />
      </v-container>
    </div>
    <div>
      <v-container class="d-flex justify-center flex-column align-center">
        <H2 :h2Title="'Fasilitas Sekolah'" />
        <CardwithoutOverlay :arrayData="fasilitas" />
      </v-container>
    </div>
    <div>
      <BannerWithoutBtn :backgroundSrc="'assets/images/background2.jpg'" />
    </div>
    <div>
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    pegawai: [
      {
        nama: 'Staff non Pendidikan',
        src: 'assets/images/guru1.jpeg',
      },
      {
        nama: 'Staff Guru',
        src: 'assets/images/guru2.jpeg',
      },
      {
        nama: 'Unit SMPK Ronggolawe Tuban',
        src: 'assets/images/guru3.jpeg',
      },
    ],
    fasilitas: [
      {
        nama: 'Ruang Kelas',
        src: 'assets/images/fasilitas1.jpeg',
        desc: 'Use this section to talk about the characteristics of each of the listed items.',
      },
      {
        nama: 'Ruang Kelas',
        src: 'assets/images/fasilitas2.png',
        desc: 'Use this section to talk about the characteristics of each of the listed items.',
      },
      {
        nama: 'Ruang Kelas',
        src: 'assets/images/fasilitas3.jpeg',
        desc: 'Use this section to talk about the characteristics of each of the listed items.',
      },
    ],
  }),
};
</script>
