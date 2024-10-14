// exemplo com arrow function

// function retornoAPI(url: string): string {
//    return url;
// }

const retornoAPI = (url: string): void => {
    console.log('URL DA API: ', url)
}

retornoAPI("https://teste.com");