<template>
  <section
    id="home"
    class="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-cover bg-center lg:bg-fixed animate-fade section-background"
      :style="{ backgroundImage: `url(${hero1})` }"
    ></div>
    <div
      class="absolute inset-0 bg-cover bg-center lg:bg-fixed animate-fade section-background"
      :style="{ backgroundImage: `url(${hero2})`, animationDelay: '5s' }"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"
    ></div>
    <!-- Gradient overlay -->
    <div
      class="relative text-center px-4 sm:px-8 max-w-screen-xl mx-auto"
      data-aos="fade-up"
    >
      <h1
        class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
      >
        Welkom bij <span class="text-gold">KapsalonTND3</span>
      </h1>
      <p
        class="text-gold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-light tracking-wider drop-shadow-md"
      >
        Uw bestemming voor stijl en verzorging.
      </p>
      <p
        class="text-white text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto italic"
      >
        Onze professionele stylisten staan klaar om u de beste knip- en
        kleurervaring te bieden.
      </p>
      <button
        @click="scrollToSection('#contact')"
        class="mt-8 px-6 sm:px-8 md:px-12 py-3 md:py-4 bg-gold text-dark font-bold rounded-full hover:bg-white hover:text-dark transition-transform transform hover:scale-105 duration-300 shadow-xl"
      >
        Maak Een Afspraak
      </button>
    </div>
  </section>
</template>

<script>
import hero1 from "@/assets/image/hero_1.jpeg";
import hero2 from "@/assets/image/Hero_2.jpeg";
export default {
  data() {
    return {
      hero1,
      hero2,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  animation: fade 10s infinite;
}

@keyframes fade {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.3)
  );
}

.content {
  position: relative;
  text-align: center;
  padding: 32px;
  max-width: 1280px;
  margin: 0 auto;
}

.title {
  font-size: 5rem;
  font-weight: 800;
  color: white;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.highlight {
  color: #ebc863;
}

.subtitle {
  font-size: 2rem;
  color: #ebc863;
  margin-top: 16px;
  font-weight: 300;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.description {
  font-size: 1.5rem;
  color: white;
  margin-top: 16px;
  font-style: italic;
}

.cta-button {
  margin-top: 32px;
  padding: 16px 32px;
  background-color: #ebc863;
  color: #1c1c1c;
  font-weight: bold;
  border-radius: 9999px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  background-color: white;
  color: #1c1c1c;
  transform: scale(1.05);
}
</style>
