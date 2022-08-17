export const mapScroll = {
  data () {
    return {
      isTouch: false
    }
  },
  watch: {
    '$root.isTouch': function () {
      if (this.$root.isTouch) {
        this.map.behaviors.disable(['drag'])
      }
    }
  },
  created () {
    window.addEventListener('touchstart', this.setTouch, false)
  },
  methods: {
    setTouch () {
      this.isTouch = true
      window.removeEventListener('touchstart', this.setTouch, false)
    },
    setMapListener () {
      this.map.behaviors.disable(['scrollZoom'])
      this.map.controls.events.add('fullscreenenter', (e) => {
        this.map.behaviors.enable(['scrollZoom', 'drag'])
      })
      this.map.controls.events.add('fullscreenexit', (e) => {
        this.map.behaviors.disable(['scrollZoom'])
        if (this.$root.isTouch) {
          this.map.behaviors.disable(['drag'])
        }
      })
    }
  }
}