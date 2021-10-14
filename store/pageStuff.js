export const state = () => ({
  detailGroup: [
    {
      name: 'Каталог кухонь',
      text: "",
      imgName: 'detail_1.png',
      overImgName: '',                //'woman.png'
      path: '/',
      rowSpan: 4,
      columnSpan: 1,
      isLink: false
    },
    {
      name: 'Примеры проектов с ценами',
      text: "",
      imgName: 'citchen_5.png',
      overImgName: '',
      path: '/',
      rowSpan: 3,
      columnSpan: 1,
      isLink: false
    },
    {
      name: 'Подробнее',
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      imgName: 'birusa.png',
      overImgName: '',
      path: '/',
      rowSpan: 3,
      columnSpan: 1,
      isLink: true
    },
    {
      name: 'Элементы кухни',
      text: "",
      imgName: 'kitchen_3.png',
      overImgName: '',
      path: '/',
      rowSpan: 2,
      columnSpan: 1,
      isLink: false
    },
    {
      name: 'Конструктор кухонь',
      text: "",
      imgName: 'kitchen_3.png',
      overImgName: '',
      path: '/',
      rowSpan: 2,
      columnSpan: 1,
      isLink: false
    },
    {
      name: 'Как заказать кухню',
      text: "",
      imgName: 'citchen_5.png',
      overImgName: '',
      path: '/',
      rowSpan: 3,
      columnSpan: 1,
      isLink: false
    },
    {
      name: '',
      text: "",
      imgName: 'actions.png',
      overImgName: '',
      path: '/',
      rowSpan: 3,
      columnSpan: 1,
      isLink: false
    },
    {
      name: 'Информация о компании',
      text: "",
      imgName: 'manufacture.png',
      overImgName: 'woman.png',
      path: '/',
      rowSpan: 3,
      columnSpan: 2,
      isLink: false
    },
    {
      name: 'Калькулятор цены кухонь',
      text: "",
      imgName: 'kitchen_3.png',
      overImgName: '',
      path: '/',
      rowSpan: 6,
      columnSpan: 1,
      isLink: false
    },
  ]
})

export const getters = {
  GET_DETAIL_GROUP: st => st.detailGroup
}
