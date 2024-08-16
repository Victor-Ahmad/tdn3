<template>
  <section id="services" class="min-h-screen py-12 md:py-24 w-full bg-dark">
    <div class="w-full px-4 sm:px-8 max-w-screen-xl mx-auto">
      <h2
        class="text-gold text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16"
        data-aos="fade-up"
      >
        Onze Diensten
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
      >
        <div class="flex flex-col items-center group" data-aos="fade-right">
          <img
            :src="service1"
            alt="Service 1"
            class="rounded-lg shadow-lg object-cover w-full h-48 border-4 border-dark group-hover:border-gold transition-all duration-300"
          />
          <h3 class="text-lg md:text-xl text-gold mt-4">Haarstyling</h3>
        </div>
        <div class="flex flex-col items-center group" data-aos="fade-right">
          <img
            :src="service2"
            alt="Service 2"
            class="rounded-lg shadow-lg object-cover w-full h-48 border-4 border-dark group-hover:border-gold transition-all duration-300"
          />
          <h3 class="text-lg md:text-xl text-gold mt-4">Baard Trim</h3>
        </div>
        <div class="flex flex-col items-center group" data-aos="fade-left">
          <img
            :src="service3"
            alt="Service 3"
            class="rounded-lg shadow-lg object-cover w-full h-48 border-4 border-dark group-hover:border-gold transition-all duration-300"
          />
          <h3 class="text-lg md:text-xl text-gold mt-4">
            Warme Handdoek Scheerbeurt
          </h3>
        </div>
        <div class="flex flex-col items-center group" data-aos="fade-left">
          <img
            :src="service4"
            alt="Service 4"
            class="rounded-lg shadow-lg object-cover w-full h-48 border-4 border-dark group-hover:border-gold transition-all duration-300"
          />
          <h3 class="text-lg md:text-xl text-gold mt-4">Haar Kleuren</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import images
import service1 from "@/assets/image/haircuts/men/1.jpeg";
import service2 from "@/assets/image/haircuts/men/2.jpeg";
import service3 from "@/assets/image/haircuts/women/1.jpeg";
import service4 from "@/assets/image/haircuts/women/2.jpeg";

export default {
  data() {
    return {
      service1,
      service2,
      service3,
      service4,
    };
  },
};
</script>

<style scoped>
.services-section {
  min-height: 100vh;
  padding: 96px 0;
  width: 100%;
  background-color: #1c1c1c;
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.service-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 8px;
  border: 4px solid #1c1c1c;
  transition: border-color 0.3s ease-in-out;
}

.service-item:hover .service-image {
  border-color: #ebc863;
}

.service-title {
  margin-top: 16px;
  font-size: 1.5rem;
  color: #ebc863;
}
</style>
