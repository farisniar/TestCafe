import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.modalrakyat.id/`;

test('Check Link or UI', async t => {
    await t

        .navigateTo('https://www.modalrakyat.id/funding')
        .navigateTo('https://www.modalrakyat.id/borrow')
        .navigateTo('https://www.modalrakyat.id/about-us')
        .navigateTo('https://www.modalrakyat.id/faq')
        .navigateTo('https://www.modalrakyat.id')
        .navigateTo('https://www.modalrakyat.id/contact-us')
        .navigateTo('https://www.modalrakyat.id/our-team')
        .navigateTo('https://www.modalrakyat.id/careers')
        .navigateTo('https://www.modalrakyat.id');
});

test('Registrasi Sebagai Pendana', async t => {
    await t

      .navigateTo('https://www.modalrakyat.id/register')
      //click link dengan a href text
      .click(Selector('a').withText('Daftar Jadi Pemberi Dana'))
      //fill form
      .typeText('#name', 'Faris Kurnia Ardi')
      .typeText('#email', 'test@gmail.com')
      .typeText('#phone', '081385435014')
      .typeText('#password', 'cermat123')
      .click('#register > span');


});
