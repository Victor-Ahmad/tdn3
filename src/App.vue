<template>
  <div class="dark bg-dark text-light font-sans w-full overflow-x-hidden">
    <!-- Header -->
    <header
      class="fixed w-full z-50 bg-gradient-to-r from-black via-dark to-gray-800 bg-opacity-90 backdrop-blur-lg transition-all duration-500 ease-in-out shadow-lg"
    >
      <div
        class="flex justify-between items-center py-4 px-8 w-full max-w-screen-xl mx-auto"
      >
        <div class="flex justify-between items-center">
          <img :src="logo" alt="Logo" class="h-20 lg:h-20" />
          <h4
            class="text-white text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
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
          <font-awesome-icon
            :icon="menuOpen ? 'fas fa-times' : 'fas fa-bars'"
          />
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
        </div>
      </div>
    </header>

    <!-- Hero Section -->
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
        class="relative text-center px-8 max-w-screen-xl mx-auto"
        data-aos="fade-up"
      >
        <h1
          class="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
        >
          Welkom bij <span class="text-gold">KapsalonTND3</span>
        </h1>
        <p
          class="text-gold text-xl md:text-2xl lg:text-3xl mt-4 font-light tracking-wider drop-shadow-md"
        >
          Uw bestemming voor stijl en verzorging.
        </p>
        <p class="text-white text-lg md:text-xl mt-4 max-w-2xl mx-auto italic">
          Onze professionele stylisten staan klaar om u de beste knip- en
          kleurervaring te bieden.
        </p>
        <button
          @click="scrollToSection('#contact')"
          class="mt-8 px-8 md:px-12 py-3 md:py-4 bg-gold text-dark font-bold rounded-full hover:bg-white hover:text-dark transition-transform transform hover:scale-105 duration-300 shadow-xl"
        >
          Maak Een Afspraak
        </button>
      </div>
    </section>

    <!-- Services Section with Faded Borders -->
    <section id="services" class="min-h-screen py-24 w-full bg-dark">
      <div class="w-full px-8 max-w-screen-xl mx-auto">
        <h2
          class="text-gold text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Onze Diensten
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

    <!-- Haircuts Section with Grid Layout -->
    <section id="haircuts" class="min-h-screen py-24 w-full bg-black">
      <div class="w-full px-8 max-w-screen-xl mx-auto">
        <h2
          class="text-gold text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Kapsels
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Men's Haircuts Column -->
          <div>
            <h3
              class="text-white text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Heren Kapsels
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                class="relative group hover-scale border-4 border-dark rounded-xl"
                data-aos="fade-up"
                v-for="(haircut, index) in menHaircuts"
                :key="index"
              >
                <img
                  :src="haircut.src"
                  :alt="'Heren Kapsel ' + (index + 1)"
                  class="rounded-lg shadow-lg object-cover w-full h-64"
                />
                <!-- <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                >
                  <p class="text-gold text-lg md:text-xl font-bold">
                    Heren Kapsel {{ index + 1 }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>

          <!-- Women's Haircuts Column -->
          <div>
            <h3
              class="text-white text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Dames Kapsels
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div
                class="relative group hover-scale border-4 border-dark rounded-xl"
                data-aos="fade-up"
                v-for="(haircut, index) in womenHaircuts"
                :key="index"
              >
                <img
                  :src="haircut.src"
                  :alt="'Dames Kapsel ' + (index + 1)"
                  class="rounded-lg shadow-lg object-cover w-full h-64"
                />
                <!-- <div
                  class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                >
                  <p class="text-gold text-lg md:text-xl font-bold">
                    Dames Kapsel {{ index + 1 }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section with Parallax Effect -->
    <section
      id="pricing"
      class="min-h-screen py-24 w-full relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-fixed bg-center section-background"
        :style="{ backgroundImage: `url(${hero1})` }"
      ></div>
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div class="relative w-full px-8 max-w-screen-xl mx-auto">
        <h2
          class="text-gold text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Prijzen
        </h2>
        <div class="flex flex-col lg:flex-row gap-12">
          <!-- Men's Pricing -->
          <div
            class="w-full lg:w-1/2 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <h3 class="text-3xl md:text-4xl text-gold font-bold mb-8">Heren</h3>
            <ul class="space-y-6 text-lg md:text-xl">
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Knippen</span>
                <span>v.a. €12</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Baard</span>
                <span>€10</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Epilaren met Touw</span>
                <span>€5</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Harsen</span>
                <span>€5</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Föhnen stijlen</span>
                <span>€10</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Wassen</span>
                <span>€3</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Gezichtsbehandeling</span>
                <span>€15</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Gezichtsbehandeling Speciaal</span>
                <span>€25</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Proteïne behandeling</span>
                <span>v.a. €50</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Verven</span>
                <span>v.a. €15</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Kinderen t/m jaar 10</span>
                <span>€10</span>
              </li>
            </ul>
          </div>
          <!-- Women's Pricing -->
          <div
            class="w-full lg:w-1/2 bg-black bg-opacity-70 p-8 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h3 class="text-3xl md:text-4xl text-gold font-bold mb-8">Dames</h3>
            <ul class="space-y-6 text-lg md:text-xl">
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Knippen</span>
                <span>v.a. €20</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Föhnen Stijlen</span>
                <span>v.a. €15</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Highlight</span>
                <span>v.a. €50</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Verven</span>
                <span>v.a. €25</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Proteïne behandeling</span>
                <span>v.a. €50</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Hele gezicht epileren met touw</span>
                <span>€20</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Wenkbrauwen epileren met touw</span>
                <span>€10</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Gezichtsbehandeling</span>
                <span>€25</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Makeup</span>
                <span>v.a. €50</span>
              </li>
              <li
                class="flex justify-between border-b border-gray-700 pb-2 hover:text-gold transition-colors duration-300"
              >
                <span>Harsen gezicht</span>
                <span>€15</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="salon" class="min-h-screen py-24 w-full bg-black">
      <div class="w-full px-8 max-w-screen-xl mx-auto">
        <h2
          class="text-white text-4xl md:text-5xl font-bold text-center mb-16"
          data-aos="fade-up"
        >
          <span class="text-gold"> Welkom </span>
          bij onze salon
        </h2>

        <swiper
          :modules="modules"
          :grabCursor="true"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          loop
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
          style="height: 600px"
        >
          <swiper-slide v-for="(image, index) in salonImages" :key="index">
            <img
              :src="image"
              alt="Salon Image"
              class="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- Availability Section -->
    <section class="min-h-screen py-24 w-full bg-dark">
      <div
        class="flex flex-col items-center justify-center w-full px-8 max-w-screen-xl mx-auto"
        data-aos="fade-up"
      >
        <h3 class="text-gold text-4xl md:text-5xl font-bold mb-8">
          Openingstijden
        </h3>
        <div class="w-full md:w-2/3 lg:w-1/3 space-y-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Ma:</span>
            </div>
            <span>9:00 - 18:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Di:</span>
            </div>
            <span>9:00 - 19:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Wo:</span>
            </div>
            <span>9:00 - 19:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Do:</span>
            </div>
            <span>9:00 - 19:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Vr:</span>
            </div>
            <span>9:00 - 19:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Za:</span>
            </div>
            <span>9:00 - 20:00</span>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="text-gold mr-4"
              ></font-awesome-icon>
              <span>Zo:</span>
            </div>
            <span>9:00 - 18:00</span>
          </div>
        </div>
        <p class="text-white text-base md:text-xl mb-8 mt-12 text-center">
          Binnenlopen is mogelijk! We streven ernaar om al onze klanten te
          ontvangen, met of zonder afspraak.
        </p>
        <button
          @click="scrollToSection('#contact')"
          class="px-8 md:px-12 py-3 md:py-4 bg-gold text-dark font-bold rounded-full hover:bg-white hover:text-dark transition-transform transform hover:scale-105 duration-300 shadow-xl"
        >
          Maak Een Afspraak
        </button>
      </div>
    </section>

    <!-- About Us Section -->
    <section
      id="about"
      class="min-h-screen py-24 w-full bg-black relative flex items-center justify-center"
    >
      <div
        class="absolute inset-0 bg-cover bg-center section-background"
        :style="{ backgroundImage: `url(${about1})`, opacity: 0.2 }"
      ></div>
      <div class="relative w-full px-8 max-w-screen-lg mx-auto text-center">
        <div class="p-8" data-aos="fade-up">
          <h3 class="text-gold text-4xl md:text-5xl font-bold mb-12">
            Over ons
          </h3>
          <p class="text-white text-base md:text-xl mb-12">
            Bij <span class="text-gold">Kapsalontnd3</span> draait alles om uw
            haar. Ons getalenteerde team heeft jarenlange ervaring en blijft op
            de hoogte van de laatste trends en technieken. Wij geloven in
            persoonlijke aandacht en uitstekende service.
          </p>
        </div>
        <div class="p-8" data-aos="fade-up">
          <vue-carousel :items="1" :autoplay="true" :loop="true">
            <img
              :src="about2"
              class="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </vue-carousel>
        </div>
      </div>
    </section>

    <!-- Contact Us Section with Parallax Effect -->
    <section
      id="contact"
      class="min-h-screen py-24 w-full bg-black relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-cover bg-fixed bg-center section-background"
        :style="{ backgroundImage: `url(${contactUs})` }"
      ></div>
      <div class="absolute inset-0 bg-black opacity-70"></div>
      <div
        class="relative w-full px-8 max-w-screen-xl mx-auto text-center"
        data-aos="fade-up"
      >
        <h3 class="text-gold text-4xl md:text-5xl font-bold mb-12">Contact</h3>
        <form
          @submit="sendEmail"
          class="max-w-3xl mx-auto space-y-8"
          data-aos="fade-up"
        >
          <div class="relative">
            <label
              for="name"
              class="absolute text-gold left-4 top-2 transition-all transform scale-75 -translate-y-6 origin-top-left"
              >Naam</label
            >
            <input
              type="text"
              id="name"
              name="from_name"
              v-model="formData.from_name"
              class="w-full py-4 px-8 bg-black text-white rounded border border-gold focus:outline-none"
              required
            />
          </div>
          <div class="relative">
            <label
              for="email"
              class="absolute text-gold left-4 top-2 transition-all transform scale-75 -translate-y-6 origin-top-left"
              >E-mail</label
            >
            <input
              type="email"
              id="email"
              name="from_email"
              v-model="formData.from_email"
              class="w-full py-4 px-8 bg-black text-white rounded border border-gold focus:outline-none"
              required
            />
          </div>
          <div class="relative">
            <label
              for="phone"
              class="absolute text-gold left-4 top-2 transition-all transform scale-75 -translate-y-6 origin-top-left"
              >Telefoonnummer</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              v-model="formData.phone"
              class="w-full py-4 px-8 bg-black text-white rounded border border-gold focus:outline-none"
              required
            />
          </div>
          <div class="relative">
            <label
              for="message"
              class="absolute text-gold left-4 top-2 transition-all transform scale-75 -translate-y-6 origin-top-left"
              >Bericht</label
            >
            <textarea
              id="message"
              name="message"
              v-model="formData.message"
              class="w-full py-4 px-8 bg-black text-white rounded border border-gold focus:outline-none"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full py-4 bg-gold text-dark font-bold rounded-full hover:bg-white hover:text-dark transition-colors duration-300 shadow-lg"
          >
            Verstuur Bericht
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 w-full bg-black">
      <div class="w-full max-w-screen-xl mx-auto text-white px-8">
        <div
          class="flex flex-col lg:flex-row justify-between items-start lg:items-center"
        >
          <!-- Column 1: Business Information -->
          <div class="flex flex-col lg:w-1/3 mb-6 lg:mb-0">
            <h4 class="text-gold text-lg mb-4">Kapsalon</h4>
            <p class="text-sm md:text-base">
              &copy; 2024 Alle rechten voorbehouden.
            </p>
            <p class="text-sm md:text-base">KVK: 93666748</p>
          </div>

          <!-- Column 2: Contact Information -->
          <div class="flex flex-col lg:w-1/3 mb-6 lg:mb-0">
            <h4 class="text-gold text-lg mb-4">Contact Informatie</h4>
            <p class="text-sm md:text-base">
              Breedstraat 21, 1441 CB Purmerend
            </p>
            <p class="text-sm md:text-base">Telefoon: +31 6 84393940</p>
          </div>

          <!-- Column 3: Social Media Icons -->
          <div class="flex space-x-4 lg:w-1/3 justify-center lg:justify-end">
            <a
              href="https://www.facebook.com/profile.php?id=100005573056735"
              target="_blank"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="text-gold text-2xl bg-dark p-3 rounded-full shadow-md hover:bg-gold hover:text-dark transition duration-300"
              ></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import logo from "./assets/image/logo.png";
import hero1 from "./assets/image/hero_1.jpeg";
import hero2 from "./assets/image/Hero_2.jpeg";
import service1 from "./assets/image/haircuts/men/1.jpeg";
import service2 from "./assets/image/haircuts/men/2.jpeg";
import service3 from "./assets/image/haircuts/women/1.jpeg";
import service4 from "./assets/image/haircuts/women/2.jpeg";
import haircut1 from "./assets/image/haircuts/men/3.jpeg";
import haircut2 from "./assets/image/haircuts/men/4.jpeg";
import haircut3 from "./assets/image/haircuts/women/3.jpeg";
import haircut4 from "./assets/image/haircuts/women/4.jpeg";
import haircut5 from "./assets/image/haircuts/women/5.jpeg";
import about1 from "./assets/image/about_1.jpeg";
import about2 from "./assets/image/about_2.jpeg";
import contactUs from "./assets/image/contact_us.jpeg";
import salonImage1 from "./assets/image/salon/1.jpeg";
import salonImage2 from "./assets/image/salon/2.jpeg";
import salonImage3 from "./assets/image/salon/3.jpeg";
import salonImage4 from "./assets/image/salon/4.jpeg";
import salonImage5 from "./assets/image/salon/5.jpeg";
import salonImage6 from "./assets/image/salon/6.jpeg";
import salonImage7 from "./assets/image/salon/7.jpeg";
import salonImage8 from "./assets/image/salon/8.jpeg";
import salonImage9 from "./assets/image/salon/9.jpeg";
import salonImage10 from "./assets/image/salon/10.jpeg";
import salonImage11 from "./assets/image/salon/11.jpeg";
import salonImage12 from "./assets/image/salon/12.jpeg";

import haircut6 from "./assets/image/haircuts/men/6.jpeg";
import haircut7 from "./assets/image/haircuts/men/7.jpeg";
import haircut8 from "./assets/image/haircuts/men/8.jpeg";
import haircut9 from "./assets/image/haircuts/men/9.jpeg";
import haircut10 from "./assets/image/haircuts/men/10.jpeg";
import haircut11 from "./assets/image/haircuts/men/11.jpeg";
import haircut12 from "./assets/image/haircuts/men/12.jpeg";
import haircut13 from "./assets/image/haircuts/men/13.jpeg";
import haircut14 from "./assets/image/haircuts/men/14.jpeg";

import haircut15 from "./assets/image/haircuts/women/6.jpeg";
import haircut16 from "./assets/image/haircuts/women/7.jpeg";
import haircut17 from "./assets/image/haircuts/women/8.jpeg";
import haircut18 from "./assets/image/haircuts/women/9.jpeg";
import haircut19 from "./assets/image/haircuts/women/10.jpeg";
import haircut20 from "./assets/image/haircuts/women/11.jpeg";
import haircut21 from "./assets/image/haircuts/women/12.jpeg";
import haircut22 from "./assets/image/haircuts/women/13.jpeg";

import Swal from "sweetalert2"; // Import SweetAlert2

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import VueCarousel from "vue-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFlip,
  EffectCube,
  EffectFade,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";

// Add icons to the library
library.add(faFacebookF, faInstagram, faTwitter, faClock, faBars, faTimes);

export default {
  name: "App",
  components: {
    FontAwesomeIcon, // Register the FontAwesomeIcon component
    VueCarousel,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [
        Autoplay,
        EffectCoverflow,
        Pagination,
        Navigation,
        EffectFlip,
        EffectCube,
        EffectFade,
        EffectCreative,
      ],
    };
  },
  data() {
    return {
      menuOpen: false,
      logo,
      hero1,
      hero2,
      service1,
      service2,
      service3,
      service4,
      haircut1,
      haircut2,
      haircut3,
      haircut4,
      haircut5,
      haircut6,
      haircut7,
      haircut8,
      haircut9,
      haircut10,
      haircut11,
      haircut12,
      haircut13,
      haircut14,
      haircut15,
      haircut16,
      haircut17,
      haircut18,
      haircut19,
      haircut20,
      haircut21,
      haircut22,

      // activeTab: "men",
      menHaircuts: [
        { src: haircut1 },
        { src: haircut2 },
        { src: haircut6 },
        { src: haircut7 },
        { src: haircut8 },
        { src: haircut9 },
        { src: haircut10 },
        { src: haircut11 },
        // { src: haircut12 },
        { src: haircut13 },
        { src: haircut14 },
      ],
      womenHaircuts: [
        { src: haircut3 },
        { src: haircut4 },
        { src: haircut5 },
        { src: haircut15 },
        { src: haircut16 },
        { src: haircut17 },
        { src: haircut18 },
        // { src: haircut19 },
        { src: haircut20 },
        { src: haircut21 },
        { src: haircut22 },
      ],
      about1,
      about2,
      contactUs,
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
      // Add form data properties
      formData: {
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    },
    sendEmail(event) {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_svjolk5",
          "template_u5riczu",
          event.target,
          "eVnvH4XFvBUET0UXJ"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);

            // Show success popup
            Swal.fire({
              icon: "success",
              title: "Bericht Verstuurd!",
              text: "Uw bericht is succesvol verstuurd. We zullen spoedig contact met u opnemen.",
              showConfirmButton: false,
              timer: 3000,
            });

            // Clear the form data
            this.formData.from_name = "";
            this.formData.from_email = "";
            this.formData.phone = "";
            this.formData.message = "";
          },
          (error) => {
            console.log("FAILED...", error.text);

            // Show error popup
            Swal.fire({
              icon: "error",
              title: "Bericht Mislukt",
              text: "Er is iets misgegaan. Probeer het alstublieft opnieuw.",
            });
          }
        );
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  },
};
</script>

<style scoped>
.animate-fade {
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

.bg-fixed {
  background-attachment: fixed;
}

.section-background {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

header {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.hover-scale {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.1); /* Slightly scale the card */
  border-color: #ebc863; /* Change the border color to gold */
}
</style>
