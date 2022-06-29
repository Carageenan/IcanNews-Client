<template>
  <div class="flex-col">
    <!--Carousel-->
    <carousel-comp></carousel-comp>
    <!--SideBar-->
    <div id="main" class="flex gap-2">
      <div>
        <aside class="w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded bg-neutral">
            <ul class="space-y-2">
              <ul>
                <li>
                  <button
                    class="
                      flex
                      items-center
                      p-2
                      btn
                      text-base
                      font-normal
                      text-gray-900
                      rounded-lg
                      dark:text-white
                    "
                    type="submit"
                    v-if="searchOrFilterMode"
                    @click="backToNormal"
                  >
                    back
                  </button>
                </li>
                <form @submit.prevent="searchHandler">
                  <li>
                    <a
                      href="#"
                      class="
                        flex
                        items-center
                        p-2
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                    >
                      <span class="flex-1 ml-3 whitespace-nowrap"
                        >Search News</span
                      >
                    </a>
                  </li>
                  <li>
                    <input
                      type="text"
                      placeholder="Type here"
                      class="input w-full max-w-xs"
                      v-model="search"
                    />
                    <button
                      class="
                        flex
                        items-center
                        p-2
                        btn
                        text-base
                        font-normal
                        text-gray-900
                        rounded-lg
                        dark:text-white
                      "
                      type="submit"
                    >
                      search
                    </button>
                  </li>
                </form>
              </ul>
              <li>
                <div tabindex="0" class="collapse">
                  <input type="checkbox" />
                  <div
                    class="
                      collapse-title
                      btn
                      m-1
                      flex
                      items-center
                      p-2
                      text-base
                      font-normal
                      text-gray-900
                      rounded-lg
                      dark:text-white
                    "
                  >
                    <p>
                      <i class="fa-solid fa-hand-point-right"></i> &nbsp; &nbsp;
                      News By Category
                    </p>
                  </div>
                  <div class="collapse-content">
                    <!--Categories-->
                    <list-categories
                      v-for="category in dataCategories"
                      :key="category.id"
                      :data="category"
                      @getInputFilter="getInputFilter"
                    ></list-categories>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div class="flex flex-col">
        <div class="grid grid-cols-4 gap-4 flex-grow-1 justify-center">
          <card-comp
            v-for="eachNews in news"
            :key="eachNews.id"
            :data="eachNews"
            @getInputFilter="getInputFilter"
          ></card-comp>
        </div>
        <div class="btn-group">
          <button class="btn" @click="decrementPage">«</button>
          <button class="btn">{{ printPage }}</button>
          <button class="btn" @click="incrementPage">»</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listCategories from "../components/ListCategories.vue";
import cardComp from "../components/CardList.vue";
import carouselComp from "../components/Carousel.vue";
export default {
  name: "homeComp",
  components: {
    listCategories,
    cardComp,
    carouselComp,
  },
  data() {
    return {
      pageNum: 1,
      search: null,
      filter: null,
      searchOrFilterMode: false,
    };
  },
  methods: {
    backToNormal() {
      this.filter = null;
      this.search = null;
      this.pageNum = 1;
      this.searchOrFilterMode = false;
      this.$store.dispatch("getNewsByPage", {
        page: this.pageNum,
        search: this.search,
        filter: this.filter,
      });
    },
    getInputFilter(value) {
      this.filter = value;
      this.searchOrFilterMode = true;
      this.$store.dispatch("getNewsByPage", {
        page: this.pageNum,
        search: this.search,
        filter: this.filter,
      });
    },
    searchHandler() {
      this.searchOrFilterMode = true;
      this.$store.dispatch("getNewsByPage", {
        page: this.pageNum,
        search: this.search,
        filter: this.filter,
      });
    },
    decrementPage() {
      if (this.pageNum > 1) {
        this.pageNum -= 1;
        this.$store.dispatch("getNewsByPage", {
          page: this.pageNum,
          search: this.search,
          filter: this.filter,
        });
      }
    },
    incrementPage() {
      this.pageNum += 1;
      this.$store.dispatch("getNewsByPage", {
        page: this.pageNum,
        search: this.search,
        filter: this.filter,
      });
    },
  },
  computed: {
    printPage() {
      return `Page ${this.pageNum}`;
    },
    dataCategories() {
      return this.$store.state.categories;
    },
    news() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.commit("CHANGE_INHOME", true);
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getNewsByPage", {
      page: this.pageNum,
      search: this.search,
      filter: this.filter,
    });
  },
};
</script>

<style>
</style>