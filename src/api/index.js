import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        return await axios.get(url);
    } catch (e) {

    }
}