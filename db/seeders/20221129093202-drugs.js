/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      login: 'John Doe',
      password: '1234',
      email: 'john@mail.bk',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Drugs', [{
      logo: 'https://avatars.mds.yandex.net/get-mpic/4762868/img_id3821892217196244375.jpeg/9',
      title: 'омагнитофин',
      price: 544,
      sale: 0.1,
      count: 1000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('Baskets', [{
      user_id: 1,
      drug_id: 1,
      count: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
