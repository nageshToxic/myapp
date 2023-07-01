import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
    const myStyle={color:"red"}
  return (
    <>
       <section className='main-card--cointainer'>
      {
       menuData.map((curElem)=>{
        const {id ,name ,category , image ,description } =curElem;
        return(
            <>
            <div className="card-container" key={curElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle" style={myStyle}>
                {name}
                </span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </span>
                <div className="card-read">Read</div>
                <img src={image} alt="images" className="card-media"/>
              </div>
            </div>
          </div>
          </>
        )

      })}
      </section>
      
    </>
  )
};

export default MenuCard;