import axios from 'axios'
const apiKey = "249355fd66mshce23ef53b26eaf8p19a135jsnf0fec768adff"

async function translate (text, source, target ) {
  return await axios({
    "method": "GET",
    "url": "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
      "x-rapidapi-key": apiKey
    }, "params": {
      "source": `${source}`,
      "target": `${target}`,
    "input": `${text}`
    }
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export default translate