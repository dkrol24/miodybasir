export default {
  name: 'order',
  title: 'Zamówienia',
  type: 'document',
  fields: [
    {
      title: 'Użytkownik',
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'userName',
      title: 'Nazwa użytkownika',
      type: 'string',
    },
    {
      name: 'itemsPrice',
      title: 'Cena jednostkowa',
      type: 'number',
    },
    {
      name: 'shippingPrice',
      title: 'Cena dostawy',
      type: 'number',
    },
    {
      name: 'totalPrice',
      title: 'Cena całkowita',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'Metoda płatności',
      type: 'string',
    },
    {
      title: 'Adres dostawy',
      name: 'shippingAddress',
      type: 'shippingAddress',
    },
    {
      title: 'Wynik płatności',
      name: 'paymentResult',
      type: 'paymentResult',
    },
    {
      title: 'Zamówione przedmioty',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'Zamówiony przedmiot',
          type: 'orderItem',
        },
      ],
    },
    {
      title: 'Zapłacone?',
      name: 'isPaid',
      type: 'boolean',
    },
    {
      title: 'Data płatności',
      name: 'paidAt',
      type: 'datetime',
    },
    {
      title: 'Dostarczone?',
      name: 'isDelivered',
      type: 'boolean',
    },
    {
      title: 'Dostarczone dnia',
      name: 'deliveredAt',
      type: 'datetime',
    },
    {
      title: 'Stworzone dnia',
      name: 'createdAt',
      type: 'datetime',
    },
  ],
}
