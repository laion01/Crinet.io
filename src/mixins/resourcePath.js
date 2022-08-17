export const resourcePath = {
  data: {
    path: ''
  },
  created () {
    this.setResourcePath()
  },
  methods: {
    setResourcePath () {
      const resourcePathEl = document.getElementById('resource-path')
      if (resourcePathEl) {
        this.path = resourcePathEl.getAttribute('data-path')
      }
    }
  }
}