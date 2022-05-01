const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input#searchByID')
    console.log(input.value)
    if (input.value < 4 && input.value > 0) {
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
          console.log(data)})}
    else {
        console.log('Not A Valid Movie')
    }
      }
)}


document.addEventListener('DOMContentLoaded', init);