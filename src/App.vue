<template>
  <div id="app" class="bg-info">
    <div>
      <navbar-comp v-if="!inLoginOrRegis"></navbar-comp>
    </div>
    <router-view />
  </div>
</template>

<script>
import navbarComp from "./components/Navbar.vue";

export default {
  components: {
    navbarComp,
  },
  computed: {
    inLoginOrRegis() {
      return this.$store.state.inLoginOrRegis;
    },
  },
  created() {
    if (localStorage.access_token) {
      this.$store.commit("CHANGE_ISLOGIN", true);
    }
  },
};
</script>



