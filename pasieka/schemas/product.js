export default {
  name: 'product',
  title: 'Produkt',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'countInStock',
      title: 'Ilość w magazynie',
      type: 'number',
    },
  ],
}
