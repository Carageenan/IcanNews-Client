<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a @click="toHome" class="btn btn-ghost normal-case text-xl"
        >ICAN NEWS PORTAL</a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li v-if="!isLogin"><a @click="changePage('/')">Home</a></li>
        <li v-if="!isLogin"><a @click="changePage('/register')">Sign Up</a></li>
        <li v-if="!isLogin"><a @click="changePage('/login')">Sign In</a></li>
        <li v-if="isLogin">
          <a @click="changePage('/MyFavorite')">Favorite News</a>
        </li>
        <li v-if="isLogin"><a @click="doLogout">Sign Out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarComp",
  data() {
    return {};
  },
  methods: {
    toHome() {
      if (!this.inHome) {
        this.$router.push("/");
        this.$store.commit("CHANGE_INMYFAVORITE", false);
      }
    },
    changePage(page) {
      this.$router.push(page);
      this.$store.commit("CHANGE_INHOME", false);
    },
    doLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push("/");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    inHome() {
      return this.$store.state.inHome;
    },
  },
  created() {},
};
</script>

<style>
</style>