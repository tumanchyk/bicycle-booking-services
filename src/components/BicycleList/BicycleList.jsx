import { useEffect, useState } from "react";
import { getAllBicycles, deleteBicycle, updateBicycleStatus } from "../../api/apis";
import BicycleItem from "./BicycleItem";
import style from './BicycleList.module.scss';

const BicycleList = () => {
        const[bicycles, setBicycles] = useState([])

    useEffect(() => {
        getAllBicycles().then(setBicycles)
    }, [])

    const handleDelete = async (id) => {
        await deleteBicycle(id)
        await getAllBicycles().then(setBicycles)
    }
    const handleUpdate = async (id, status) => {
        await updateBicycleStatus(id, status)
        await getAllBicycles().then(setBicycles)
    }

    return <div className={style.bicyclesWrapper}>
        <ul className={style.list}>
            {bicycles && bicycles.map(bicycle => <BicycleItem key={bicycle._id} data={bicycle} handleDelete={handleDelete} handleUpdate={handleUpdate} />)}
        </ul>
    </div>
}
export default BicycleList;