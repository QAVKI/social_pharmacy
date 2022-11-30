// async function addToBasket(event) {
//   event.preventDefault();
//   if (event.target.classList.contains('btn btn-info')) {
//     console.log('click', event.target.dataset.id);

//     const id = {
//       id: event.target.dataset.id,
//     };

//     await fetch('/addToBasket', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(id),
//     });
//   }
// }
// document.querySelector('.card')?.addEventListener('click', addToBasket);
