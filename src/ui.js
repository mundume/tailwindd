class UI {
    constructor(){
        this.profile = document.querySelector('.movie-list')
        this.profile2 = document.querySelector('.movie-lists')
        
        
    }
    showMovies(movie){
        
        let url = `https://image.tmdb.org/t/p/w500/`
        
        
     this.profile.innerHTML += `
     <div class="card w-36 h-40 border-2 border-green-300 relative m-10">
     <img src="${url+movie.poster_path}" class="w-full h-full " alt="">
     <div class=" block items-center m-1">
       <h5 class=" inline-block  text-center  text-white text-sm m-2">${movie.title}</h5>
     <button class=" m-auto flex items-center justify-center bg-transparent p-1 outline-none rounded-lg text-white text-xl w-3 h-5"><i class=" fa-solid fa-arrow-right text-green-300 text-lg"></i></button>
     </div>
     `
    }
    showTv(movie){
        
       
        let url = `https://image.tmdb.org/t/p/w500/`
        this.profile2.innerHTML += `
        <div class="card w-36 h-40 border-2 border-green-300 relative m-10">
        <img src="${url+movie.poster_path}" class="w-full h-full " alt="">
        <div class=" block items-center m-1">
          <h5 class=" inline-block  text-center  text-white text-sm m-2">${movie.title}</h5>
        <button class=" m-auto flex items-center justify-center bg-transparent p-1 outline-none rounded-lg text-white text-xl w-3 h-5"><i class=" fa-solid fa-arrow-right text-green-300 text-lg"></i></button>
        </div>
        `


    }
    showSearch(movie){
       
        let url = `https://image.tmdb.org/t/p/w500/`
        this.profile.innerHTML += `
        <div class="card w-36 h-40 border-2 border-green-300 relative m-10">
        <img src="${url+movie.poster_path}" class="w-full h-full " alt="">
        <div class=" block items-center m-1">
          <h5 class=" inline-block  text-center  text-white text-sm m-2">${movie.title}</h5>
        <button class=" m-auto flex items-center justify-center bg-transparent p-1 outline-none rounded-lg text-white text-xl w-3 h-5"><i class=" fa-solid fa-arrow-right text-green-300 text-lg"></i></button>
        </div>
        `

    }
    clear(){
        this.profile.innerHTML = ""
    }
    
}


export {UI}
