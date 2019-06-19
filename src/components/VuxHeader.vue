<template>
  <div class="pages">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    <div >
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
  data() {
    return {
      menus: {
        menu1: "Take Photo",
        menu2: "Choose from photos"
      },
      showMenus: false
    };
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style  scoped>
.vux-header{
  /* height: 1.333333rem; */
}
</style>