import style from './BicycleList.module.scss';
import SelectEl from './Select/Select';

const BicycleItem = ({ data, handleDelete, handleUpdate }) => {
    
    return <li className={`${style.item} ${data.status === "busy" && style.itemBusy} ${data.status === "unavailable" && style.itemUnavlb}`}>
        <button className={style.deleteBtn} onClick={()=> handleDelete(data._id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M9 9L1 1M9 1L1 9" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
        <div>
            <div className={style.wrapper}><span className={style.name}>{data.name}</span> - {data.type} ({data.color})</div>
        <p className={style.id}>ID: {data._id}</p>
            <div className={style.wrapper}>Status:
                <SelectEl status={data.status} id={data._id} handleUpdate={handleUpdate}/>
            </div>
        </div>
        <div className={style.price}>{data.price} UAH/hr.</div>
    </li>
    
}

export default BicycleItem;