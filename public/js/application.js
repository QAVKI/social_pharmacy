const priceButton = document.querySelector('.but');
const countButton = document.querySelector('.count');
const drugs = document.querySelectorAll('[data-id]');
const drugsContainer = document.querySelector('#shop-container');
const selectContainer = document.querySelector('.select');

let htmlArr;
let mark = false;
let markCount = false;

priceButton?.addEventListener('click', async (event) => { // Сортировка по цене !!!
  const container = document.querySelector('.row-cols-md-2');
  event.preventDefault();
  if (mark === false) {
    htmlArr = [...drugs];
    const newDrugs = [];
    for (let i = 0; i < drugs.length; i += 1) {
      let price = +drugs[i].innerHTML.slice(drugs[i].innerHTML.slice(100, 200).indexOf('<strong>') + 108, drugs[i].innerHTML.slice(100, 200).indexOf('</strong>') + 100);
      if (price === 0) {
        const peace = drugs[i].innerHTML.indexOf('Цена: ') + 6;
        const peace2 = drugs[i].innerHTML.slice(peace);
        price = peace2.slice(0, peace2.indexOf(' руб'));
      }
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
      html += `<div data-id="1" class="card ">` + htmlArr[drugsReplic.indexOf(newDrugs[i])].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    mark = true;
  } else {
    for (let i = 0; i < htmlArr.length; i += 1) {
      drugs[i].remove();
    }

    let html = '';
    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-id="1" class="card ">` + htmlArr[i].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    mark = false;
  }
});

countButton?.addEventListener('click', async (event) => { // Сортировка по наличию !!!
  const container = document.querySelector('.row-cols-md-2');
  console.log(container);
  event.preventDefault();

  if (markCount === false) {
    htmlArr = [...drugs];
    const newDrugs = [];

    for (let i = 0; i < drugs.length; i += 1) {
      // console.log(drugs[i].innerHTML);
      const peace = drugs[i].innerHTML.slice(drugs[i].innerHTML.indexOf('В наличии') + 11);
      const price = peace.slice(0, peace.indexOf('</p>'));
      newDrugs.push(price.slice(6, price.indexOf('</')));
    }

    const drugsReplic = [...newDrugs];
    newDrugs.sort((a, b) => b - a);
    const resultDrugs = [];
    // console.log(newDrugs)
    for (let i = 0; i < newDrugs.length; i += 1) {
      drugs[i].remove();
      resultDrugs.push(drugsReplic.indexOf(newDrugs[i]));
    }
    let html = '';

    for (let i = 0; i < resultDrugs.length; i += 1) {
      html += `<div data-id="1" class="card ">` + htmlArr[drugsReplic.indexOf(newDrugs[i])].innerHTML + `</div>`;
    }
    // console.log(container)
    // console.log(html)

    container.innerHTML = html;
    markCount = true;
  } else {
    for (let i = 0; i < htmlArr.length; i += 1) {
      drugs[i].remove();
    }

    let html = '';

    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-id="1" class="card ">` + htmlArr[i].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    markCount = false;
  }
});

drugsContainer?.addEventListener('click', async (event) => { // Уменьшение количества товара
  if (event.target.innerText === 'Купить') {
    event.preventDefault();
    const littleDiv = event.target.closest('div');
    const count = Number(littleDiv.childNodes[4].childNodes[1].textContent);
    console.log(littleDiv.childNodes[4].childNodes[1]);
    littleDiv.childNodes[4].childNodes[1].textContent = count - 1;
    const href = littleDiv.dataset.id;
    console.log(littleDiv.dataset.id);
    console.log(href);
    await fetch(`/basket/${href}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
});

selectContainer?.addEventListener('click', async (event) => { // Взять халяву
  if (event.target.innerText === 'Получить') {
    event.preventDefault();
    const littleDiv = event.target.closest('div');
    const hre = littleDiv.childNodes[1].childNodes[0].textContent;
    console.log(hre);
    const button = event.target;
    button.setAttribute('disabled', true);
    await fetch(`/basket/select/${hre}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
});
