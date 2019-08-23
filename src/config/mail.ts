export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false,
  auth: {
    user: '6a926a8dabc622',
    pass: 'fa3d1e10f6fa5f',
  },
  // host: process.env.MAIL_HOST,
  // port: process.env.MAIL_PORT,
  // secure: false,
  // auth: {
  //   user: process.env.MAIL_USER,
  //   pass: process.env.MAIL_PASS,
  // },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
