import {debounce} from "common/utils";

export const itemListenerMixin = {
  data() {
    return{
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)

    this.itemImgListener = this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
    console.log('我是混入的');
  }
}
