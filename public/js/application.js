const priceButton = document.querySelector('.but');
const drugs = document.querySelectorAll('[data-log]');

let htmlArr;
let mark = false;

priceButton.addEventListener('click', async (event) => {
  const container = document.querySelector('.row-cols-md-2');
  event.preventDefault();
  if (mark === false) {
    htmlArr = [...drugs];
    const newDrugs = [];
    for (let i = 0; i < drugs.length; i += 1) {
      const price = +drugs[i].innerHTML.slice(drugs[i].innerHTML.slice(100, 200).indexOf('<strong>') + 108, drugs[i].innerHTML.slice(100, 200).indexOf('</strong>') + 100);
      newDrugs.push(price);
    }
    const drugsReplic = [...newDrugs];
    newDrugs.sort((a, b) => a - b);
    const resultDrugs = [];
    for (let i = 0; i < newDrugs.length; i += 1) {
      drugs[i].remove();
      resultDrugs.push(drugsReplic.indexOf(newDrugs[i]));
    }
    let html = '';
    for (let i = 0; i < resultDrugs.length; i += 1) {
      html += `<div data-log="1" class="card ">` + htmlArr[drugsReplic.indexOf(newDrugs[i])].innerHTML + `</div>`;
    }
    container.innerHTML = html;
    mark = true;
  } else {
    console.log(htmlArr)
    // for (let i = 0; i < htmlArr.length; i += 1) {
    //   drugs[i].remove();
    //   resultDrugs.push(drugsReplic.indexOf(newDrugs[i]));
    // }
    // let html = '';
    // for (let i = 0; i < resultDrugs.length; i += 1) {
    //   html += `<div data-log="1" class="card ">` + htmlArr[drugsReplic.indexOf(newDrugs[i])].innerHTML + `</div>`;
    // }
  }
});
