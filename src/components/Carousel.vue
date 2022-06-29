<template>
  <div class="carousel max-h-96 w-auto">
    <div id="slide1" class="carousel-item relative w-full">
      <img :src="news[0].imgUrl" class="w-full" />
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img :src="news[1].imgUrl" class="w-full" />
      /
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img :src="news[2].imgUrl" class="w-full" />
      /
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img :src="news[3].imgUrl" class="w-full" />
      /
      <div
        class="
          absolute
          flex
          justify-between
          transform
          -translate-y-1/2
          left-5
          right-5
          top-1/2
        "
      >
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselComp",
  computed: {
    news() {
      return this.$store.state.news;
    },
    methods: {},
  },
};
</script>

<style>
</style>