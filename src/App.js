import React from 'react';

import {Cards, CountryPicker, Chart} from "./components";
import styles from './App.module.css';
import {fetchData} from "./api";

import coronaImg from './images/corona.png';
import stayHome from './images/stayhome.png';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData();
        this.setState({data: data});
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({data: data, country: country});
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <img className={styles.imageSmall} src={stayHome} alt="COVID-19"/>
            </div>
        )
    }
}

export default App;
