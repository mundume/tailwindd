import { Api } from './api'
import { UI } from './ui'
import './index.css'


const api = new Api
const ui = new UI

const input = document.querySelector('input')
const card = document.querySelector('.cardio')
input.addEventListener('keyup', (e)=>{
 const searchText = e.target.value
if(searchText){

 card.style.display = 'inline-block'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=8e0b116be1777a1303706d69ee895eb3`
  const param = `${url}&query=${searchText}`
 
   async function dataa(){
    const res = await fetch(param)
    const response = await res.json()
    return response
   }
   dataa().then(data=>{
    const k = data.results
    k.forEach(item=>{
      ui.showSearch(item)
     
    })
   })
}else{
  card.style.display = 'none'
}
  
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


