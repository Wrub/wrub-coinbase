export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
}

export const useFetch = async (url: string, options: any) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}
