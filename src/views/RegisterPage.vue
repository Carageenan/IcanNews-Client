<template>
  <div
    class="hero min-h-screen bg-fixed"
    style="background-image: url(https://wallpaperaccess.com/full/1567736.png)"
  >
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <form @submit.prevent="register">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                v-model="username"
                type="text"
                placeholder="Username"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                v-model="email"
                type="email"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                v-model="phoneNumber"
                type="text"
                placeholder="Phone-Number"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                v-model="address"
                type="text"
                placeholder="Your address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
      <div class="text-center lg:text-right">
        <h1 class="text-5xl font-bold">
          See the world with us, <br />
          Ican News!
        </h1>
        <p class="py-6">
          <span style="font-bold">Ican news portal</span> is a website that'll
          serve best information to you!
        </p>
        <p class="py-6">
          Allready have an account? Login
          <button
            @click="changePage('/login')"
            type="button"
            style="text-decoration: underline"
          >
            here
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerComp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    changePage(page) {
      this.$router.push(page);
    },
    async register() {
      await this.$store.dispatch("doRegister", {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      });
      if (this.successRegister) {
        this.changePage("/login");
      }
    },
  },
  computed: {
    successRegister() {
      return this.$store.state.successRegister;
    },
  },
};
</script>

<style>
</style>