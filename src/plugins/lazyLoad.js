const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
}

const preloadImage = img => {
  const { dataset: { lazy }, tagName } = img
  switch (tagName) {
    case 'IMG':
      img.setAttribute('src', lazy)
      break
    case 'DIV':
    case 'A':
      img.setAttribute('style', `background-image: url("${lazy}")`)
      break
    default:
      break
  }
}

const observer = new IntersectionObserver((entries, self) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      preloadImage(target)
      self.unobserve(target)
    }
  })
}, config)

export const lazyLoad = {
  install (Vue) {
    Vue.mixin({
      mounted () {
        const images = [...document.querySelectorAll('[data-lazy]')]
        images.forEach(img => observer.observe(img))
      }
    })
  }
}