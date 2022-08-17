/*
  lazyComponent mixin: load component data by calling method defined in [lazyComponentMethod] when component appears in viewport
*/

export const lazyComponent = {
  data () {
    return {
      lazyComponentMethod: 'getData',
      lazyComponentObserverConfig: {
        rootMargin: '0px 0px 400px 0px',
        threshold: 0.2
      }
    }
  },
  mounted () {
    this.initObserver()
  },
  methods: {
    getData () {},
    initObserver () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this[this.lazyComponentMethod]()
            }, 50)
            observer.disconnect()
          }
        })
      }, this.lazyComponentObserverConfig)
      observer.observe(this.$el)
    }
  }
}
