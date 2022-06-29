<template>
  <div>
    <div
      class="card lg:card shadow-xl"
      style="
        background-image: url(https://wallpaperaccess.com/full/1567736.png);
      "
    >
      <figure>
        <img :src="detailsData.imgUrl" alt="News" />
      </figure>
      <div
        class="card-body text-base font-normal text-gray-900 dark:text-white"
      >
        <h2 class="card-title">{{ detailsData.title }}</h2>
        <p>{{ detailsData.content }}</p>
        <div>
          <img :src="qrCode" alt="" />
          <h3>Share QR Code</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsDetailComp",
  computed: {
    detailsData() {
      return this.$store.state.detailsData;
    },
    favoritedBy() {
      return this.$store.state.detailsData.Customers.length;
    },
    qrCode() {
      return this.$store.state.qrCode;
    },
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getQrCode");
  },
};
</script>

<style>
</style>