import './CartWidget.css'
import {ShoppingCart} from 'lucide-react'

function CartWidget(){
    return (
        <button className='cartWidget'I>
            <ShoppingCart className='shoppingCart'/>
        </button>
    )
}

export default CartWidget