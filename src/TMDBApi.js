const API_TOKEN = "f86ae34ebe2bb94704f74300385e8626"

//?le paramètre text = film cherché, page = nombre de page voulu
export function getFilmsFromTMdbWidthText(text, page) {

    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&language=fr&query=" + text + "&page=" + page;

    return fetch(url)
        .then((response) => response.json())
        .catch((error)=> console.log(error))
}