const app = Vue.createApp({
  data() {
    return {
      name: "Anish",
      age: 37,
      missy: "https://www.imghippo.com/i/Plq1z1726723029.jpg",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
