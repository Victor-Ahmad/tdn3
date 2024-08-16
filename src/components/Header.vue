<template>
  <header
    class="fixed w-full z-50 bg-gradient-to-r from-black via-dark to-gray-800 bg-opacity-90 backdrop-blur-lg transition-all duration-500 ease-in-out shadow-lg"
  >
    <div
      class="flex justify-between items-center py-4 px-8 w-full max-w-screen-xl mx-auto"
    >
      <div class="flex justify-between items-center">
        <img :src="logo" alt="Logo" class="h-16 md:h-20" />
        <h4
          class="text-white text-lg md:text-2xl lg:text-3xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
        >
          <span class="text-white">Kapsalon</span>
          <span class="text-[#ebc863]">TND3</span>
        </h4>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden text-gold text-3xl focus:outline-none"
        @click="toggleMenu"
      >
        <font-awesome-icon :icon="menuOpen ? 'fas fa-times' : 'fas fa-bars'" />
      </button>
      <!-- Navigation Menu -->
      <nav
        :class="[
          'lg:flex',
          'lg:space-x-8',
          'lg:text-lg',
          menuOpen ? 'block' : 'hidden',
          'lg:block',
          'absolute',
          'lg:relative',
          'lg:top-0',
          'top-16',
          'right-0',
          'bg-black',
          'lg:bg-transparent',
          'w-full',
          'lg:w-auto',
          'shadow-lg',
          'lg:shadow-none',
          'px-8',
          'py-4',
          'lg:p-0',
          'space-y-4',
          'lg:space-y-0',
          'text-center',
          'lg:text-left',
          'z-50',
        ]"
      >
        <ul class="flex flex-col lg:flex-row lg:space-x-8">
          <li><a href="#home" class="hover:text-gold">Home</a></li>
          <li><a href="#services" class="hover:text-gold">Diensten</a></li>
          <li><a href="#about" class="hover:text-gold">Over ons</a></li>
          <li><a href="#haircuts" class="hover:text-gold">Kapsels</a></li>
          <li><a href="#pricing" class="hover:text-gold">Prijzen</a></li>
          <li><a href="#contact" class="hover:text-gold">Contact</a></li>
          <!-- Social Media Icons for Mobile -->
          <li class="lg:hidden flex justify-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100005573056735"
              target="_blank"
              class="hover:text-white transition-colors duration-300"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="text-gold text-2xl bg-dark p-2 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              class="hover:text-white transition-colors duration-300"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="text-gold text-2xl bg-dark p-2 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              class="hover:text-white transition-colors duration-300"
            >
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="text-gold text-2xl bg-dark p-2 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
          </li>
        </ul>
      </nav>
      <!-- Social Media Icons for Desktop -->
      <div class="hidden lg:flex space-x-4">
        <a
          href="https://www.facebook.com/profile.php?id=100005573056735"
          target="_blank"
          class="hover:text-white transition-colors duration-300"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook-f']"
            class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
          ></font-awesome-icon>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="hover:text-white transition-colors duration-300"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
          ></font-awesome-icon>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          class="hover:text-white transition-colors duration-300"
        >
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
          ></font-awesome-icon>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/image/logo.png";

export default {
  data() {
    return {
      menuOpen: false,
      logo,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  computed: {
    menuClasses() {
      return [
        "lg:flex",
        "lg:space-x-8",
        "lg:text-lg",
        this.menuOpen ? "block" : "hidden",
        "lg:block",
        "absolute",
        "lg:relative",
        "top-16 lg:top-0",
        "right-0",
        "bg-black lg:bg-transparent",
        "w-full lg:w-auto",
        "shadow-lg lg:shadow-none",
        "px-8 lg:p-0",
        "py-4 lg:py-0",
        "space-y-4 lg:space-y-0",
        "text-center lg:text-left",
        "z-50",
      ];
    },
  },
};
</script>

<style scoped>
.header-class {
  position: fixed;
  width: 100%;
  z-index: 50;
  background: linear-gradient(to right, #000000, #1c1c1c, #2c2c2c);
  background-opacity: 90%;
  backdrop-blur: 16px;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  height: 80px;
}

.title {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.highlight {
  color: #ebc863;
}

.mobile-menu-button {
  font-size: 2rem;
  color: #ebc863;
}

.nav-links li a:hover {
  color: #ebc863;
}

.mobile-socials,
.desktop-socials a {
  color: #ebc863;
  font-size: 2rem;
  background-color: #1c1c1c;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

.mobile-socials a:hover,
.desktop-socials a:hover {
  background-color: #ebc863;
  color: #1c1c1c;
}
</style>
