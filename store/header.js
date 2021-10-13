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
  ],
  menuBtns: [
    {
      title: 'Заказать замер',
      img: 'ruletka.png',
      path: '/'
    },
    {
      title: 'Рассчитать стоимость',
      img: 'calculator.png',
      path: '/'
    },
    {
      title: 'Записаться на встречу',
      img: 'phone.png',
      path: '/'
    },
  ],
})

export const getters = {
  GET_TOOLS_BUTTONS: st => st.toolsBtns,
  GET_MENU_BUTTONS: st => st.menuBtns
}
