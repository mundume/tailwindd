import { Api } from './api'
import { UI } from './ui'
import './index.css'


const api = new Api
const ui = new UI

const input = document.querySelector('input')
input.addEventListener('keyup', (e)=>{
 const searchText = e.target.value
 
})

api.getTv()
.then(data=>{
  const res = data.results
  
   res.forEach(movie=>{
  
    ui.showTv(movie)
   
})
  })
  
 
// })
// document.querySelector('.add').addEventListener('click', ()=>{
//   console.log('clicked')
// })
api.get()
.then(data=>{
  
  let k = data.results
 k.forEach(item=>{
  
 ui.showMovies(item)
 })
})


