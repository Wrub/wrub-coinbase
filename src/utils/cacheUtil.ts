const cache = new Map<string, ICoinsAPIResponse>()

export const setCacheData = (key: string, data: ICoinsAPIResponse) => {
    cache.set(key, data)
}

export const getCachedData = (key: string) => {
    return cache.get(key)
}
