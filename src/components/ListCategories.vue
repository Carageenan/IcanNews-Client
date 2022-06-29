<template>
  <label
    tabindex="0"
    class="
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
    {{ data.name }}
    <input
      @change="filerByCategories($event)"
      :value="data.id"
      type="checkbox"
      class="checkbox"
  /></label>
</template>

<script>
export default {
  name: "listCategories",
  props: ["data"],
  data: () => {
    return {};
  },
  methods: {
    filerByCategories(event) {
      this.$emit("getInputFilter", event.target.value);
    },
  },
};
</script>

<style>
</style>