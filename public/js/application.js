const priceButton = document.querySelector('.but');
const countButton = document.querySelector('.count');
const drugs = document.querySelectorAll('[data-log]');
console.log(countButton);

let htmlArr;
let mark = false;
let markCount = false;

priceButton.addEventListener('click', async (event) => { // Сортировка по цене !!!
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
    for (let i = 0; i < htmlArr.length; i += 1) {
      drugs[i].remove();
    }
    let html = '';
    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-log="1" class="card ">` + htmlArr[i].innerHTML + `</div>`;
    }
    container.innerHTML = html;
    mark = false;
  }
});

countButton.addEventListener('click', async (event) => { // Сортировка по наличию !!!
  const container = document.querySelector('.row-cols-md-2');
  event.preventDefault();
  if (markCount === false) {
    htmlArr = [...drugs];
    const newDrugs = [];
    for (let i = 0; i < drugs.length; i += 1) {
      const peace = drugs[i].innerHTML.slice(drugs[i].innerHTML.indexOf('В наличии') + 11);
      const price = peace.slice(0, peace.indexOf('</p>'));
      newDrugs.push(price);
    }
    const drugsReplic = [...newDrugs];
    newDrugs.sort((a, b) => b - a);
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
    markCount = true;
  } else {
    for (let i = 0; i < htmlArr.length; i += 1) {
      drugs[i].remove();
    }
    let html = '';
    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-log="1" class="card ">` + htmlArr[i].innerHTML + `</div>`;
    }
    container.innerHTML = html;
    markCount = false;
  }
});
