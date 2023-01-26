import './ProdDetail.css';

function ProdDetail({prodSingle,setclickProd,cart,setvisitDesc}){
    return(
        <div className='prodsingle'>
            <div className="card card-div">
                <img src={prodSingle.image} className="card-img-top imgProd" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{prodSingle.title}</h5>
                    <p className="card-text">{prodSingle.description}</p>
                    <h6 className="card-title">Price</h6>
                    <p className="card-text">{prodSingle.price}</p>
                    <a onClick={()=>{setclickProd(false);setvisitDesc(true);
                        localStorage.setItem('cartData',JSON.stringify(cart));}} href="#" className="btn btn-primary">Back</a>
                </div>
            </div>
        </div>

    )

}

export default ProdDetail