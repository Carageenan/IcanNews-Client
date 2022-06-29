import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";
const address = "https://localhost:3000";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    successRegister: false,
    categories: [],
    inHome: false,
    inMyFavorite: false,
    news: [],
    detailsData: "",
    myFavoriteList: [],
    qrCode: "",
  },
  getters: {},
  mutations: {
    CHANGE_ISLOGIN(state, payload) {
      state.isLogin = payload;
    },
    CHANGE_CATEGORIES(state, payload) {
      state.categories = payload;
    },
    CHANGE_SUCCESS_REGISTER(state, payload) {
      state.successRegister = payload;
    },
    CHANGE_NEWS(state, payload) {
      state.news = payload;
    },
    CHANGE_DETAILS_DATA(state, payload) {
      state.detailsData = payload;
    },
    CHANGE_MYFAVORITELIST(state, payload) {
      state.myFavoriteList = payload;
    },
    CHANGE_INMYFAVORITE(state, payload) {
      state.inMyFavorite = payload;
    },
    CHANGE_INHOME(state, payload) {
      state.inHome = payload;
    },
    CHANGE_QRCODE(state, payload) {
      state.qrCode = payload;
    },
  },
  actions: {
    async doRegister(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${address}/customers/register`,
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            phoneNumber: payload.phoneNumber,
            address: payload.address,
          },
        });
        swal(response.data.message, "", "success");
        context.commit("CHANGE_SUCCESS_REGISTER", true);
      } catch (err) {
        let errorMsg = err.response.data.message;
        if (Array.isArray(errorMsg)) {
          errorMsg = errorMsg.join(", ");
        }
        swal(errorMsg, "", "warning");
      }
    },
    async doLogin(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${address}/customers/login`,
          data: {
            email: payload.email,
            password: payload.password,
          },
        });
        localStorage.access_token = response.data.access_token;
        localStorage.id = response.data.id;
        localStorage.role = response.data.role;
        localStorage.username = response.data.username;
        swal("Login Successfully!", "", "success");
        context.commit("CHANGE_ISLOGIN", true);
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },
    doLogout(context) {
      localStorage.clear();
      swal("Logout Successfully!", "", "success");
      context.commit("CHANGE_ISLOGIN", false);
    },

    async getNewsByPage(context, payload) {
      try {
        let { page, search, filter } = payload;
        if (!search) {
          search = "";
        }
        if (!filter) {
          filter = "";
        }
        const response = await axios({
          method: "get",
          url: `${address}/news/cust?page=${page}&size=8&filter=${filter}&search=${search}`,
        });
        context.commit("CHANGE_NEWS", response.data.dataNews);
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },

    async getCategories(context) {
      try {
        const response = await axios({
          method: "get",
          url: `${address}/category`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        context.commit("CHANGE_CATEGORIES", response.data.data);
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },
    async addFavoriteList(context, payload) {
      try {
        const response = await axios({
          method: "post",
          url: `${address}/favorite/${payload}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        swal(response.data.message, "", "success");
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },
    async getFavoriteList(context) {
      try {
        const response = await axios({
          method: "get",
          url: `${address}/favorite`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        context.commit("CHANGE_MYFAVORITELIST", response.data);
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },
    async getQrCode(context) {
      try {
        const response = await axios({
          method: "get",
          url: `https://api.happi.dev/v1/qrcode?data=http://localhost:8080&width=128&dots=000000&bg=FFFFFF&apikey=bb3e295YFnt3FJuFfYIdvSOqiKpGOE0ABuTddpsZAQahRyp19hSDyuk2
          `,
        });
        context.commit("CHANGE_QRCODE", response.data.qrcode);
      } catch (err) {
        swal(err.response.data.message, "", "error");
      }
    },
  },
  modules: {},
});
