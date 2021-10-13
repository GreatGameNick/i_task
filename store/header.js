export const state = () => ({
  toolsBtns: [
    {
      title: 'Материалы',
      path: '/'
    },
    {
      title: '3-D конструктор',
      path: '/'
    },
    {
      title: 'Калькуляторы',
      path: '/'
    },
    {
      title: 'Контакты',
      path: '/'
    },
  ]
})

export const getters = {
  GET_TOOLS_BUTTONS: st => st.toolsBtns
}
