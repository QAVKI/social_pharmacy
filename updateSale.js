/* eslint-disable max-len */
const { Drug, Select, User } = require('./db/models');

function updateSale() {
  setInterval(async () => {
    const drugs = await Drug.findAll({ raw: true });
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      result.push(drugs.splice(Math.floor(Math.random() * drugs.length), 1)[0]);
    }
    await Select.destroy({
      where: {},
      truncate: true,
    });
    await Select.bulkCreate([{ drug_id: result[0].id, date: new Date(2022, 12, 1) }, { drug_id: result[1].id, date: new Date(2022, 12, 1) }, { drug_id: result[2].id, date: new Date(2022, 12, 1) }]);
    const users = await User.findAll({});
    if (users !== undefined) {
      await User.update({
        select1: '',
        select2: '',
        select3: '',
      }, {
        where: {},
        returning: true,
        plain: true,
      });
    }
  }, 15000);
}

module.exports = updateSale;
