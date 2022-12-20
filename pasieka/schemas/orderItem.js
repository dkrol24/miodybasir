export default {
  title: 'Zamówione przedmioty',
  name: 'orderItem',
  type: 'object',
  fields: [
    {
      title: 'Nazwa',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Ilość',
      name: 'quantity',
      type: 'number',
    },
    {
      title: 'Zdjęcie',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Cena',
      name: 'price',
      type: 'number',
    },
  ],
}
