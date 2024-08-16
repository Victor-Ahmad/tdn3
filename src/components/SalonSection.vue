<template>
  <section id="salon" class="salon-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="highlight">Welkom</span> bij onze salon
      </h2>
      <Swiper
        :slides-per-view="1"
        :space-between="30"
        :pagination="{ clickable: true }"
        loop
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        effect="flip"
        :flip-effect="{ slideShadows: true }"
        style="height: 600px"
      >
        <SwiperSlide v-for="(image, index) in salonImages" :key="index">
          <img :src="image" alt="Salon Image" class="salon-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css"; // Import Swiper styles

// Import images
import salonImage1 from "@/assets/image/salon/1.jpeg";
import salonImage2 from "@/assets/image/salon/2.jpeg";
import salonImage3 from "@/assets/image/salon/3.jpeg";
import salonImage4 from "@/assets/image/salon/4.jpeg";
import salonImage5 from "@/assets/image/salon/5.jpeg";
import salonImage6 from "@/assets/image/salon/6.jpeg";
import salonImage7 from "@/assets/image/salon/7.jpeg";
import salonImage8 from "@/assets/image/salon/8.jpeg";
import salonImage9 from "@/assets/image/salon/9.jpeg";
import salonImage10 from "@/assets/image/salon/10.jpeg";
import salonImage11 from "@/assets/image/salon/11.jpeg";
import salonImage12 from "@/assets/image/salon/12.jpeg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      salonImages: [
        salonImage1,
        salonImage2,
        salonImage3,
        salonImage4,
        salonImage5,
        salonImage6,
        salonImage7,
        salonImage8,
        salonImage9,
        salonImage10,
        salonImage11,
        salonImage12,
      ],
    };
  },
};
</script>

<style scoped>
.salon-section {
  min-height: 100vh;
  padding: 96px 0;
  width: 100%;
  background-color: black;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-title {
  font-size: 4rem;
  color: #ebc863;
  text-align: center;
  margin-bottom: 64px;
  font-weight: bold;
}

.salon-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
