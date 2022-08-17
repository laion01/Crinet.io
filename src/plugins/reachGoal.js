/* eslint-disable no-undef */
/* eslint-disable no-console */

let logGoals = false
const IS_DEV = process.env.NODE_ENV === 'development'

export const reachGoal = {
  install (Vue) {
    window.addEventListener('load', () => {
      const urlParams = new URLSearchParams(window.location.search)
      const logGoalsParam = urlParams.get('log')
      if (logGoalsParam) {
        window.localStorage.setItem('log', '1')
      }
      const logGoalsStrorage = window.localStorage.getItem('log')
      logGoals = !!logGoalsStrorage
    })

    Vue.prototype.$reachGoal = (goal = {}) => {
      if (IS_DEV || logGoals) {
        if (goal.yandex) {
          console.log(`Яндекс-метрика: ${goal.yandex.name}`, `\nПараметры: ${window.JSON.stringify(goal.yandex.params)}`)
          if (goal.yandex.goalData) {
            console.log(`Данные цели: ${window.JSON.stringify(goal.yandex.goalData)}`)
          }
        }
        if (goal.google) {
          console.log(`Google-analytics: ${goal.google.category} -> ${goal.google.action}`)
        }
      }
      if (!this.IS_DEV) {
        if (goal.yandex && typeof yaCounter52611958 !== 'undefined') {
          yaCounter52611958.reachGoal(goal.yandex.name, goal.yandex.params)
        }
        if (goal.google && typeof gtag !== 'undefined') {
          gtag('event', goal.google.action, { event_category: goal.google.category })
        }
      }
    }
  }
}