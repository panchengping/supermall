import {debounce} from "common/utils";
import BackTop from "components/content/backTop/BackTop";
import {BACK_POSITION} from "./const";

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

  }
}

export const backTopMixin = {
  component: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    listenShoBackTop(position) {
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  }
}
