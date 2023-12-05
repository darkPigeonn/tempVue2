<template>
  <v-container>
    <div class="icon-container3 ms-3">
      <div class="icon">
        <Svgicon :stroke="'#00225a'" />
      </div>

      <Vicon :colour="'#00225a'" />
      <div>
        <Svgicon :stroke="'#00225a'" />
      </div>
    </div>
    <h1 class="mt-4">Kumpulan Kegiatan yang ada di SMPK Tuban</h1>
    <!-- <v-text-field variant="outlined" style="padding: 16px 12px 0px 12px; margin-top: 8px; box-shadow: 0 2px 4px #e2efff" v-model="searchQuery" placeholder="Ketik Judul event" prepend-icon="fas fa-search">
      <template v-slot:prepend> </template>
    </v-text-field> -->
    <v-row style="margin-top: 24px; margin-left: 4px">
      <v-col v-for="(image, index) in searchResults" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-card class="image-card" style="margin-bottom: 20px; margin-right: 20px">
          <div style="padding: 20px">
            <v-img :src="image.imgSrc" aspect-ratio="1.5"></v-img>
            <v-card-title>{{ image.title }}</v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    searchQuery: '',
    //ModelData
    // get-all gallery
    gallery: [
      {
        title: 'Pelatihan Pgu',
        imgSrc: '/assets/images/herobackground.jpg',
      },
      {
        title: 'Charity Concert',
        imgSrc: '/assets/images/charitygarum.jpeg',
      },
      {
        title: 'Veni Mecum Festival',
        imgSrc: '/assets/images/venimecum.jpg',
      },
      {
        title: 'Pembinaan Komunitas',
        imgSrc: '/assets/images/hpk.jpg',
      },
      {
        title: 'Pesta Nama',
        imgSrc: '/assets/images/pestanama.jpg',
      },
      {
        title: 'Edufair Sanmar Kediri',
        imgSrc: '/assets/images/edufairsanmar.jpg',
      },
      {
        title: 'Sv Games 2023',
        imgSrc: '/assets/images/svgames2023.jpg',
      },
      {
        title: 'Sv Games 2023',
        imgSrc: '/assets/images/asesmen.jpg',
      },
    ],
    garumLife: [
      {
        title: 'Life at Garum',
        description:
          'Our Stannies students, both past and present, are the lifeblood of the College. Our Stannies community of parents, families, extended family and College staff are here to support, encourage and celebrate our young men during their time as students at the College.',
      },
    ],
  }),
  computed: {
    searchResults() {
      return this.gallery.filter((image) => image.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
};
</script>

<style>
.image-card {
  transition: transform 0.3s ease; /* Efek transformasi saat hover */
}

.image-card:hover {
  transform: scale(1.05); /* Memperbesar gambar saat hover */
}
</style>
