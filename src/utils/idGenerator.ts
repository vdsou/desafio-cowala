export default {
  id() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVXZ0123456789abcdefghijklmnopqrstuvxz';
    let randomString = '';
    for (let i = 0; i < 10; i += 1) {
      randomString += characters.charAt(
        Math.round(Math.random() * characters.length),
      );
    }
    return randomString;
  },
};
