<template>
  <div class="">
    <MainHeader />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import MainHeader from './components/MainHeader.vue';

export default {
  components: {
    MainHeader
  },
  methods: {
    ...mapActions(["setPagesAction"])
  },
  async created() {
    this.setPagesAction();
  }
};
</script>