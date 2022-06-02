let date = document.getElementById('date')

const interval = setInterval(()=>{
  const now = new Date()
  date.innerHTML = now.toLocaleString()
}, 1000)