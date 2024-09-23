const app = Vue.createApp({
  data() {
    return {
      name: "Anish",
      age: 37,
      missy:
        "https://www.researchgate.net/publication/3935609/figure/fig1/AS:394647298953219@1471102656485/8-bit-256-x-256-Grayscale-Lena-Image.png",

      inputText: "Anish is the best",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
