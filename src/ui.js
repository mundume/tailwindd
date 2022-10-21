class UI {
    constructor(){
        this.profile = document.querySelector('.movie-list')
        this.profile2 = document.querySelector('.movie-lists')
        
        
    }
    showMovies(movie){
        
        let url = `https://image.tmdb.org/t/p/w500/`
        this.profile.innerHTML += `
        <div class="block w-60 h-60   m-auto mb-16 p-3 lg:p-0 text-center card sm:w-36 sm:h-40 sm:border-2 border-green-300 relative sm:m-10">
        <img loading="lazy" src="${url+movie.poster_path}" class="w-full h-full " alt="">
        <div class=" block items-center m-1">
          <h5 class=" inline-block  text-center  text-white text-sm m-2">${movie.title}</h5>
        <button class=" m-auto flex items-center justify-center bg-transparent p-1 outline-none rounded-lg text-white text-xl w-3 h-5"><i class=" fa-solid fa-arrow-right text-green-300 text-lg"></i></button>
        </div>
        `
    }
    showTv(movie){
        
       
        let url = `https://image.tmdb.org/t/p/w500/`
        this.profile2.innerHTML += `
        <div class="block w-60 h-60  m-auto p-3 lg:p-0 mb-14 text-center card sm:w-36 sm:h-40 sm:border-2 border-green-300 relative sm:m-10">
        <img loading="lazy" src="${url+movie.poster_path}" class="w-full h-full " alt="">
        <div class=" block items-center m-1">
          <h5 class=" inline-block  text-center  text-white text-sm m-2">${movie.title}</h5>
        <button class=" m-auto flex items-center justify-center bg-transparent p-1 outline-none rounded-lg text-white text-xl w-3 h-5"><i class=" fa-solid fa-arrow-right text-green-300 text-lg"></i></button>
        </div>
        `


    }
    showSearch(movie){
       
        let url = `https://image.tmdb.org/t/p/w500/`
        this.profile.innerHTML += `
        <div class="block w-60 h-60 p-3 lg:p-0 m-auto mb-14 text-center card sm:w-36 sm:h-40 sm:border-2 border-green-300 relative sm:m-10">
        <img loading="lazy" src="${url+movie.poster_path}" class="w-full h-full " alt="">
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
