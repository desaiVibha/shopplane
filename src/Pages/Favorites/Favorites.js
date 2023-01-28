import './Favorites.css';
import Star from '../../Components/Star/Star';
function Favorites({fa,handlecartclick}){
    return(
        <div className='cloth-info-fav'>
             <div className='heart-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>                 

            <div className='image'>
                <img alt='men cloth' src={fa.image}></img>
            </div>

            <p className='para-info-fav'>{fa.title}</p>

            <div className='fivestar-num-fav'>
                <Star stars={fa.rating.rate} review={fa.rating.count}/>
            </div>

            <div className='price-fav'>
                <p>{fa.price}</p>
            </div>

             <div className='btn-addtocart'>
                <button onClick={(e)=>handlecartclick(fa,e.target)} className='add-to-cart'>Add to Cart</button>
            </div> 

        </div>
    )
}
export default Favorites;