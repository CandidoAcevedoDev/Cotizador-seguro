export const VERSIONS = [
    {id: 1, name: 'Europero'},
    {id: 2, name: 'Americano'},
    {id: 3, name: 'Asíatico'},
]

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(40), (value, index) => YEARMAX - index)

export const PLANS = [
    {id: 1, name: 'Básico'},
    {id: 2, name: 'Completo'},
]