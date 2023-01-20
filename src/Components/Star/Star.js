import './Star.css';
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
const Star=({stars,review})=>{
    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index+0.5;
        return( 
        <span key={index}>
        {
            stars>=index+1?(
                <FaStar/>
            ):stars>=number?(
                <FaStarHalfAlt/>
            ):(
                <AiOutlineStar/>
            )
        }
        </span>
    );
    });
    return(
        <div className='ratingdiv'>
            {ratingStar}
            <span className='review'>({review})</span>
        </div>
    )
}
export default Star;