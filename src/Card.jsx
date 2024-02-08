import React from 'react'

const Card = ({data}) => {
    return (

        <>
        <div className='container mt-5'>
         <div className="row row-cols-1 row-cols-md-3 g-4">
           {    
            data.map((item)=>(
            <div className='main'>
            <div class="card" style={{ width: "18rem"}} key={item.id} >

            <img src={item.image} class="card-img-top" alt="..." style={{width:"15rem",height:"16rem",margin:"20px"}}/>

            <div class="card-body">

                <h5 class="card-title"> title {item.title}</h5>
                <p class="card-text des"> Description {item.description}</p>
                <p className='card-text'>Price: {item.price}</p>
            </div>
            <button type="button" class="btn btn-dark btn1">Add To Cart</button>

            </div>
            </div>

           ))
           }
           </div>
           </div>
          

        </>
    )
}

export default Card
