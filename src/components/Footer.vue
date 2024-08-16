<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h4 class="footer-title">Kapsalon</h4>
          <p>&copy; 2024 Alle rechten voorbehouden.</p>
          <p>KVK: 93666748</p>
        </div>
        <div class="footer-column">
          <h4 class="footer-title">Contact Informatie</h4>
          <p>Breedstraat 21, 1441 CB Purmerend</p>
          <p>Telefoon: +31 6 84393940</p>
        </div>
        <div class="footer-column footer-socials">
          <a
            href="https://www.facebook.com/profile.php?id=100005573056735"
            target="_blank"
          >
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="social-icon"
            />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="social-icon"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer-section {
  padding: 32px 0;
  width: 100%;
  background-color: black;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  color: white;
}

.footer-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-column {
  flex: 1;
}

.footer-title {
  font-size: 1.5rem;
  color: #ebc863;
  margin-bottom: 16px;
}

.footer-socials {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.social-icon {
  font-size: 2rem;
  background-color: #1c1c1c;
  padding: 16px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.social-icon:hover {
  background-color: #ebc863;
  color: #1c1c1c;
}
</style>
