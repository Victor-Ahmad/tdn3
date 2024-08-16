<template>
  <section id="haircuts" class="haircuts-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Kapsels</h2>
      <div class="haircuts-grid">
        <div
          v-for="(haircut, index) in haircuts"
          :key="index"
          class="haircut-item"
          data-aos="fade-up"
        >
          <img
            :src="haircut.image"
            :alt="haircut.title"
            class="haircut-image"
          />
          <div class="overlay">
            <p class="haircut-title">{{ haircut.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import haircut1 from "@/assets/image/haircuts/men/3.jpeg";
import haircut2 from "@/assets/image/haircuts/men/4.jpeg";
import haircut3 from "@/assets/image/haircuts/women/3.jpeg";
import haircut4 from "@/assets/image/haircuts/women/4.jpeg";
import haircut5 from "@/assets/image/haircuts/women/5.jpeg";

export default {
  data() {
    return {
      haircuts: [
        { title: "Korte Coupe", image: haircut1 },
        { title: "Klassieke Coupe", image: haircut2 },
        { title: "Baard Trim", image: haircut3 },
        { title: "Warme Handdoek Scheerbeurt", image: haircut4 },
        { title: "Haar Kleuren", image: haircut5 },
      ],
    };
  },
};
</script>

<style scoped>
.haircuts-section {
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

.haircuts-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
}

.haircut-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.haircut-image {
  width: 100%;
  height: 16rem;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-in-out;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: opacity 0.3s ease-in-out;
}

.haircut-item:hover .overlay {
  opacity: 0.75;
}

.haircut-title {
  font-size: 1.5rem;
  color: #ebc863;
  font-weight: bold;
}
</style>
