/* eslint-disable max-len */
const { Drug, Select } = require('./db/models');

function updateSale() {
  setInterval(async () => {
    const drugs = await Drug.findAll({ raw: true });
    // console.log(drugs);
    const result = [];
    for (let i = 0; i < 3; i += 1) {
      result.push(drugs.splice(Math.floor(Math.random() * drugs.length), 1)[0]);
      console.log(result.length, '----------------------------');
    }
    await Select.destroy({
      where: {},
      truncate: true,
    });
    await Select.bulkCreate([{ drug_id: result[0].id, date: new Date(2022, 12, 1) }, { drug_id: result[1].id, date: new Date(2022, 12, 1) }, { drug_id: result[2].id, date: new Date(2022, 12, 1) }]);
  }, 15000);
}

module.exports = updateSale;
