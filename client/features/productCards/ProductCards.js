import React from 'react';
//for each product we can link it to the particular product page
const ProductCards = ({ products }) => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap overflow-auto">
        {products.map((product) => (
          <div key={product.id} className="col d-flex flex-column align-items-center">
            <img src={product.imageUrl} alt={product.name} className="img-fluid" style={{ width: '300px', height: '200px' }}/>
            <div className="text-center">
              <h6>{product.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
