export const getData = async () => {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=218403d14023013610cbda3b344b5379")
    let data = await res.json()
    return data.results
}