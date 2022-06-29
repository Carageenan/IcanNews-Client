<template>
  <div class="flex-col grid gap-4">
    <!--Carousel-->

    <carousel-comp></carousel-comp>

    <div id="listFavorite" class="grid gap-4">
      <div>
        <h1 class="text-xl font-normal text-gray-900 rounded-lg">
          My Favorite News:
        </h1>
      </div>

      <div class="grid grid-cols-4 gap-4 flex-grow-1 justify-center">
        <h1 v-if="myFavoriteList.length == 0">
          YOU DON'T HAVE ANY FAVORITE NEWS.
        </h1>
        <card-comp
          v-for="favorite in myFavoriteList"
          :key="favorite.id"
          :data="favorite.News"
        ></card-comp>
      </div>
    </div>
  </div>
</template>

<script>
import cardComp from "../components/CardList.vue";
import carouselComp from "../components/Carousel.vue";
export default {
  name: "myFavoriteComp",
  components: {
    cardComp,
    carouselComp,
  },
  computed: {
    myFavoriteList() {
      return this.$store.state.myFavoriteList;
    },
  },
  created() {
    this.$store.dispatch("getFavoriteList");
    this.$store.commit("CHANGE_INMYFAVORITE", true);
  },
};
</script>

<style>
</style>