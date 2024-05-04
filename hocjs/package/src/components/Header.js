export const Header = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.APP_NAME);
  console.log(process.env.APP_EMAIL);
  console.log(process.env.SERVER_API);
  return `<h2>Header</h2>`;
};
