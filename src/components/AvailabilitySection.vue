<template>
  <section class="availability-section">
    <div class="container" data-aos="fade-up">
      <h3 class="section-title">Openingstijden</h3>
      <div class="schedule">
        <div
          v-for="(item, index) in schedule"
          :key="index"
          class="schedule-item"
        >
          <div class="day">
            <font-awesome-icon :icon="['fas', 'clock']" class="clock-icon" />
            <span>{{ item.day }}:</span>
          </div>
          <span class="hours">{{ item.hours }}</span>
        </div>
      </div>
      <p class="walk-in-info">
        Binnenlopen is mogelijk! We streven ernaar om al onze klanten te
        ontvangen, met of zonder afspraak.
      </p>
      <button @click="scrollToSection('#contact')" class="cta-button">
        Maak Een Afspraak
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      schedule: [
        { day: "Ma", hours: "9:00 - 18:00" },
        { day: "Di", hours: "9:00 - 19:00" },
        // Add the remaining days...
      ],
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
.availability-section {
  min-height: 100vh;
  padding: 96px 0;
  width: 100%;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 1280px;
  text-align: center;
}

.section-title {
  font-size: 4rem;
  color: #ebc863;
  margin-bottom: 32px;
  font-weight: bold;
}

.schedule {
  width: 66.66%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: white;
}

.day {
  display: flex;
  align-items: center;
}

.clock-icon {
  color: #ebc863;
  margin-right: 16px;
}

.hours {
  color: white;
}

.walk-in-info {
  color: white;
  font-size: 1rem;
  margin: 32px 0;
}

.cta-button {
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
