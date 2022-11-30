module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Drugs', [
      {
        title: 'Эльбрусин',
        price: 99999,
        sale: 10,
        logo: '/DrugsPic/Elbrus.png',
        count: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Бубеева лайт',
        price: 745,
        sale: 0,
        logo: '/DrugsPic/Bubeeva.png',
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Доденко-форте',
        price: 777,
        sale: 1,
        logo: '/DrugsPic/Dodenko.png',
        count: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Втораяфазин',
        price: 666,
        sale: 99,
        logo: '/DrugsPic/Faza.png',
        count: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Корейша Д3',
        price: 453,
        sale: 25,
        logo: '/DrugsPic/Koreisha.png',
        count: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Налбандянг',
        price: 666,
        sale: 1,
        logo: '/DrugsPic/Nalbandyan.png',
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Образцов лайт',
        price: 555,
        sale: 15,
        logo: '/DrugsPic/Obraztcov.png',
        count: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Парамзин плюс',
        price: 800,
        sale: 1,
        logo: '/DrugsPic/Paramzin.png',
        count: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Учкин чек',
        price: 310,
        sale: 23,
        logo: '/DrugsPic/Uchkin.png',
        count: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Васькова плюс',
        price: 350,
        sale: 33,
        logo: '/DrugsPic/Vaskova.png',
        count: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Забродин ультра',
        price: 544,
        sale: 1,
        logo: '/DrugsPic/Zabrodin.png',
        count: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Желобцов плюс',
        price: 580,
        sale: 1,
        logo: '/DrugsPic/Zhelobtsov.png',
        count: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Drugs');
  },
};
