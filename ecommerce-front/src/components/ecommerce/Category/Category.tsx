import { IRecord } from '@customeTypes/sharedTypes';
import style from './style.module.css';
import { Link } from "react-router-dom"
const { category, categoryImg, categoryTitle } = style;


const Category = (props: IRecord) => {
    const { title, img, prefix } = props
    return (
        <div className={category}>
            <Link to={`products/${prefix}`}>
                <div className={categoryImg}>
                    <img
                        src={img}
                        alt={title}
                    />
                </div>
                <h4 className={categoryTitle}>{title}</h4>
            </Link>
        </div>
    );
}

export default Category