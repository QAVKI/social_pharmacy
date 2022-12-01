const buyForm = document.querySelector('#shop-container');
buyForm.addEventListener('click', async (event) => {
  if (event.target.classList.contains('buy-btn')) {
    await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
});
const entry = await Entry.update({
  title: req.body.title,
  body: req.body.body,
}, {
  where: { id: req.params.id },
  returning: true,
  plain: true,
});
