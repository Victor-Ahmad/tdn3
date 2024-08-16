<template>
  <section id="pricing" class="pricing-section">
    <div class="background" :style="{ backgroundImage: `url(${hero1})` }"></div>
    <div class="overlay"></div>
    <div class="content">
      <h2 class="section-title" data-aos="fade-up">Prijzen</h2>
      <div class="pricing-grid">
        <div class="pricing-column" data-aos="fade-right">
          <h3 class="pricing-title">Heren</h3>
          <ul class="pricing-list">
            <li
              v-for="(item, index) in menPricing"
              :key="index"
              class="pricing-item"
            >
              <span>{{ item.title }}</span>
              <span>{{ item.price }}</span>
            </li>
          </ul>
        </div>
        <div class="pricing-column" data-aos="fade-left">
          <h3 class="pricing-title">Dames</h3>
          <ul class="pricing-list">
            <li
              v-for="(item, index) in womenPricing"
              :key="index"
              class="pricing-item"
            >
              <span>{{ item.title }}</span>
              <span>{{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import the background image
import hero1 from "@/assets/image/hero_1.jpeg";

export default {
  data() {
    return {
      hero1,
      menPricing: [
        { title: "Knippen", price: "v.a. €12" },
        { title: "Baard", price: "€10" },
        // Add more pricing items...
      ],
      womenPricing: [
        { title: "Knippen", price: "v.a. €20" },
        { title: "Föhnen Stijlen", price: "v.a. €15" },
        // Add more pricing items...
      ],
    };
  },
};
</script>

<style scoped>
.pricing-section {
  min-height: 100vh;
  padding: 96px 0;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.7;
}

.content {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  text-align: center;
}

.section-title {
  font-size: 4rem;
  color: #ebc863;
  margin-bottom: 64px;
  font-weight: bold;
}

.pricing-grid {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.pricing-column {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.pricing-title {
  font-size: 3rem;
  color: #ebc863;
  margin-bottom: 32px;
  font-weight: bold;
}

.pricing-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pricing-item {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: white;
  border-bottom: 1px solid #444444;
  padding-bottom: 8px;
}

.pricing-item:hover {
  color: #ebc863;
}
</style>
