import millify from 'millify'
const formatNumber = (value: number | string | any) => {
    return millify(value)
}
export default formatNumber
