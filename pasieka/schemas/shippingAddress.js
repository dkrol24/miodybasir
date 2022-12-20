export default {
  title: 'Adres dostawy',
  name: 'shippingAddress',
  type: 'object',
  fields: [
    {
      title: 'Nazwa',
      name: 'fullName',
      type: 'string',
    },
    {
      title: 'Adres',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Miasto',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Kod pocztowy',
      name: 'postalCode',
      type: 'string',
    },
    {
      title: 'Kraj',
      name: 'country',
      type: 'string',
    },
  ],
}
