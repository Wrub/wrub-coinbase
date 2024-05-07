import { useFetch, options } from '@/utils/coinApi'

export const useCoins = async () => {
    const url = 'https://coinranking1.p.rapidapi.com/coins?limit=50'
    const response = await useFetch(url, options)

    return response.data?.coins
}
