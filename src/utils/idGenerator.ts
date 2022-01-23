export default {
  id() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVXZ0123456789abcdefghijklmnopqrstuvxz';
    let randomString = '';
    for (let i = 0; i < 5; i += 1) {
      randomString += characters.charAt(
        Math.round(Math.random() * characters.length),
      );
    }
    return randomString;
  },
};
