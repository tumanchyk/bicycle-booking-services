import { useEffect, useState } from "react";
import { getStatistic } from "../../api/apis";
import './statistic.style.scss';

const Statistic = () => {
    const[statistic, setStatistic] = useState({}) //{allBicycles: 4, availableBicycles: 1, bookedBicycles: 2, averagePrice: 2861.5}

    useEffect(() => {
        getStatistic().then(setStatistic)
    }, [])
    return <div className="static">
        <h2 className="title">STATISTICS</h2>
        <p className="desc">Total Bikes: <span className="res">{statistic.allBicycles}</span></p>
        <p className="desc">Available Bikes: <span className="res">{statistic.availableBicycles}</span></p>
        <p className="desc">Booked Bikes: <span className="res">{statistic.bookedBicycles}</span></p>
        <p className="desc">Average bike cost: <span className="res">{statistic.averagePrice}</span> UAH/hr.</p>
    </div>
}
export default Statistic;