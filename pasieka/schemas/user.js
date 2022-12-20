export default {
  name: 'user',
  title: 'Użytkownik',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    },

    {
      name: 'email',
      title: 'E-mail',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Hasło',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Admin?',
      type: 'boolean',
    },
  ],
}
