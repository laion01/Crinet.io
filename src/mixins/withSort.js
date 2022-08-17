export const withSort = {
  data () {
    return {
      list: [],
      count: 0,
      sortDescend: true,
      sortName: 'room'
    }
  },
  methods: {
    sort (payload) {
      let name = payload.name
      this.sortName = name
      this.sortDescend = payload.descend === undefined ? !this.sortDescend : payload.descend
      let descend = this.sortDescend
      if (name === 'section' || name === 'finish') {
        this.list.sort(sortString)
      } else {
        this.list.sort(sortNumber)
      }

      function sortNumber (a, b) {
        return descend ? b[name] - a[name] : a[name] - b[name]
      }
      function sortString (a, b) {
        return descend
          ? a[name] > b[name] ? 1 : -1
          : b[name] < a[name] ? -1 : 1
      }
    }
  }
}