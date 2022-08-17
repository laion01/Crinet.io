import { throttle } from '@/utils'

export const screenWidth = {
  data () {
    return {
      screenWidth: 0,
      screen: ''
    }
  },
  mounted () {
    let setScreenWidth = throttle(this.setScreenWidth, 400)
    window.addEventListener('resize', () => {
      setScreenWidth()
    })
    this.setScreenWidth()
  },
  methods: {
    setScreenWidth () {
      const width = window.innerWidth
      this.screenWidth = width
      this.screen = width < 640
        ? 'phone-only' : width < 900
          ? 'phone' : width < 1200
            ? 'tablet' : 'desktop'
    }
  }
}