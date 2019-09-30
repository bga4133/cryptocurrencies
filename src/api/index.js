import axios from 'axios';

const getCryptoCurrencies = () => 
    axios.get(
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=80d0fff0e0c4f7c74f1e0e85c853db57886e1098222c1171e72d17cacdd785e6'
    )
    .then((result) => result)
    .catch((error) => console.log(error));

    export default getCryptoCurrencies;