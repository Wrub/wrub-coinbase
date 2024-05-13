export const priceChanged = (value: string | number) => {
    if (value.toString().includes('-')) {
        return value
    } else {
        return ''
    }
}
