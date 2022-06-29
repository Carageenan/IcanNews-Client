<template>
  <div class="card w-50 bg-base-100 shadow-xl">
    <figure>
      <img :src="data.imgUrl" alt="News" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ data.title }}</h2>
      <p>{{ dataContent }}...</p>
      <div class="card-actions justify-end">
        <div v-if="isLogin">
          <button
            class="btn btn-primary"
            v-if="inHome"
            @click="btnFavouriteHandler(data.id)"
          >
            Add Favorites
          </button>
        </div>
        <button
          class="btn btn-outline btn-primary"
          @click="btnDetailHandler(data.id)"
        >
          News Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardComp",
  props: ["data"],
  methods: {
    btnDetailHandler(value) {
      this.$store.commit("CHANGE_DETAILS_DATA", this.data);
      this.$router.push(`/details/${value}`);
      this.$store.commit("CHANGE_INHOME", false);
      this.$store.commit("CHANGE_INMYFAVORITE", false);
    },
    btnFavouriteHandler(value) {
      this.$store.dispatch("addFavoriteList", value);
    },
  },
  computed: {
    dataContent() {
      let arr = this.data.content.split(" ");
      let result = [];
      arr.forEach((el, i) => {
        if (i < 10) {
          result.push(el);
        }
      });
      return result.join(" ");
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    inMyFavorite() {
      return this.$store.state.inMyFavorite;
    },
    inHome() {
      return this.$store.state.inHome;
    },
  },
};
</script>

<style>
</style>