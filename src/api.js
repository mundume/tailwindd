class Api {
    constructor () {
        this.api_key = `8e0b116be1777a1303706d69ee895eb3`
        this.IMG_URL = `https://image.tmdb.org/t/p/w500/`
   
        
    }
    
      
    
    async get(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US&page1`)
        const res = await response.json()
          return res
          

    }
    async getTv(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}&language=en-US&page1`)
        const res = await response.json()
        return res
    }
   
}

// const apii  = new Api
// apii.get()
// .then(data=>console.log(data))

export {Api}