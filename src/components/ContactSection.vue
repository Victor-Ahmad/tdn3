<template>
  <section id="contact" class="contact-section">
    <div
      class="background"
      :style="{ backgroundImage: `url(${contactUs})` }"
    ></div>
    <div class="overlay"></div>
    <div class="content" data-aos="fade-up">
      <h3 class="section-title">Contact</h3>
      <form @submit="sendEmail" class="contact-form">
        <div class="form-group">
          <label for="name">Naam</label>
          <input
            type="text"
            id="name"
            name="from_name"
            v-model="formData.from_name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="from_email"
            v-model="formData.from_email"
            required
          />
        </div>
        <div class="form-group">
          <label for="phone">Telefoonnummer</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="formData.phone"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Bericht</label>
          <textarea
            id="message"
            name="message"
            v-model="formData.message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="cta-button">Verstuur Bericht</button>
      </form>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2"; // Import SweetAlert2
import emailjs from "emailjs-com";
import contactUs from "@/assets/image/contact_us.jpeg";

export default {
  data() {
    return {
      contactUs, // Background image
      formData: {
        from_name: "",
        from_email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail(event) {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_l6es4g4",
          "template_u5riczu",
          event.target,
          "eVnvH4XFvBUET0UXJ"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            Swal.fire({
              icon: "success",
              title: "Bericht Verstuurd!",
              text: "Uw bericht is succesvol verstuurd. We zullen spoedig contact met u opnemen.",
              showConfirmButton: false,
              timer: 3000,
            });
            this.formData.from_name = "";
            this.formData.from_email = "";
            this.formData.phone = "";
            this.formData.message = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
            Swal.fire({
              icon: "error",
              title: "Bericht Mislukt",
              text: "Er is iets misgegaan. Probeer het alstublieft opnieuw.",
            });
          }
        );
    },
  },
};
</script>

<style scoped>
.contact-section {
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
  max-width: 768px;
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

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

label {
  position: absolute;
  left: 16px;
  top: 8px;
  font-size: 1rem;
  color: #ebc863;
  transform: scale(0.75) translateY(-24px);
  transform-origin: top left;
}

input,
textarea {
  width: 100%;
  padding: 16px;
  background-color: black;
  color: white;
  border: 1px solid #ebc863;
  border-radius: 8px;
  outline: none;
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
