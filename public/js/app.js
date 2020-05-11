console.log('client side javascript is loaded')

fetch('/weather?address=kabul')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

document.querySelector('form').addEventListener('submit', (e) => {

  const locationValue = document.querySelector('#title').value
  fetch('/weather?address='+locationValue+'')
  .then(response => response.json())
  .then(data => {
    const div = document.createElement('div')
    div.innerHTML = data.address
    document.body.appendChild(div)
  })
  .catch(err => console.log(err))
  e.preventDefault()

})


