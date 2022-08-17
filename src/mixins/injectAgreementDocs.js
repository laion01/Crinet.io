export const injectAgreementDocs = {
  data () {
    return {
      politicsDoc: '',
      personalDoc: ''
    }
  },
  mounted () {
    this.$_mixinInjectAgreementDocs()
  },
  methods: {
    $_mixinInjectAgreementDocs () {
      const docsEl = document.getElementById('agreement-docs')
      if (docsEl) {
        this.politicsDoc = docsEl.dataset.politics
        this.personalDoc = docsEl.dataset.personal
      }
    }
  }
}