
import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID wDv7vtn1Iio5xi7iJmXKA_YLyO0jIMZih7B-7xTFCm0'
    }
});