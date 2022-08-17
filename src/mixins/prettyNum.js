export const prettyNum = {
  methods: {
    prettyNum (str) {
      str = '' + str
      return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
  }
}