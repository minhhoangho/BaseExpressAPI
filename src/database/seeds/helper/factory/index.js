import * as bcrypt from 'bcrypt';
class Factory {
  static users(num) {
    const data = [];
    data.push({
      fullName: 'Minh Hoang Ho ',
      username: 'admin',
      password: bcrypt.hashSync('123456', 9),
    });

    return data;
  }
}

export {
  Factory
}