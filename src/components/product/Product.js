import './product.css'
import { products } from '../../data';


const Product = ({img,link}) => {
    return (
        <div className='pro'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a 
                href={link}
                target="_blank"
                rel="noreferrer"
                >
                <img src={img} alt="" className='p-img' />
                </a>
        </div>
    )
}

export default Product; 