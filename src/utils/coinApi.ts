import { setCacheData, getCachedData } from './cacheUtil';

export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
}

export const useFetch = async (url: string, options: any) => {
    const cacheKey = url + JSON.stringify(options);
    const cachedData = getCachedData(cacheKey);

    if (cachedData) {
        console.log(cachedData);
        return cachedData
    }

    const response = await fetch(url, options)
    const data = await response.json()

    setCacheData(cacheKey, data);

    return data
}
