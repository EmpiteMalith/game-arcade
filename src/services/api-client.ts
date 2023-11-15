import axios from 'axios';

axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '66c596cd6fd048ebb1e34dd0b2314293'
    }
})