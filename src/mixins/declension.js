export const declension = {
  methods: {
    declension (number, titles) {
      let cases = [1, 0, 2, 2, 2, 1]
      return titles[ (number % 100 > 4 && number % 100 < 20) ? 1 : cases[(number % 10 < 5) ? number % 10 : 5] ]
    }
  }
}