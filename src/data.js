export const formFields = {
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'secondName',
      type: 'text',
    },
    {
      name: 'college',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
  ],
};

export const formState = formFields.fields.reduce((acc, { name, type }) => {
  console.log(acc);
  acc = { ...acc, [name]: '' };
  return acc;
}, {});
