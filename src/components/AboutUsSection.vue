<template>
  <section id="about" class="about-section">
    <div
      class="background"
      :style="{ backgroundImage: `url(${about1})`, opacity: 0.2 }"
    ></div>
    <div class="content" data-aos="fade-up">
      <h3 class="section-title">Over ons</h3>
      <p class="description">
        Bij <span class="highlight">Kapsalontnd3</span> draait alles om uw haar.
        Ons getalenteerde team heeft jarenlange ervaring en blijft op de hoogte
        van de laatste trends en technieken. Wij geloven in persoonlijke
        aandacht en uitstekende service.
      </p>
      <vue-carousel :items="1" :autoplay="true" :loop="true">
        <img :src="about2" class="carousel-image" />
      </vue-carousel>
    </div>
  </section>
</template>

<script>
// Import images
import about1 from "@/assets/image/about_1.jpeg";
import about2 from "@/assets/image/about_2.jpeg";

// Import and register vue-carousel
import VueCarousel from "vue-carousel";

export default {
  components: {
    VueCarousel,
  },
  data() {
    return {
      about1,
      about2,
    };
  },
};
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  padding: 96px 0;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.content {
  position: relative;
  max-width: 1024px;
  padding: 32px;
  text-align: center;
}

.section-title {
  font-size: 4rem;
  color: #ebc863;
  margin-bottom: 64px;
  font-weight: bold;
}

.description {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 64px;
}

.highlight {
  color: #ebc863;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}
</style>
