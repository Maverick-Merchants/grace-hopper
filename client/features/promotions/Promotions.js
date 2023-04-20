import React from 'react';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const promotionsData = [
  {
    id: 1,
    title: "Get 20% off your first order",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%201",
  },
  {
    id: 2,
    title: "Free shipping on orders over $50",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%202",
  },
  {
    id: 3,
    title: "Buy one, get one 50% off",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%203",
  },
  {
    id: 4,
    title: "10% off your entire order",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%204",
  },
  {
    id: 5,
    title: "Spend $75, get a free gift",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%205",
  },
  {
    id: 6,
    title: "20% off all home decor",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%206",
  },
  {
    id: 7,
    title: "Free express shipping on all orders",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%207",
  },
  {
    id: 8,
    title: "Summer Clearance Sale",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%208",
  },
  {
    id: 9,
    title: "Back to School Special",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%209",
  },
  {
    id: 10,
    title: "Free Gift with Purchase",
    imageUrl:
      "https://via.placeholder.com/300x200.png?text=Promotion%2010",
  },
];


const Promotions = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
    <h3>Promotions</h3>
    <div className='relative d-flex flex-row justify-content-around p-5 '>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={150} />
      <div id = 'slider' className=' d-flex justify-content-between w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
        {promotionsData.map((promotion) => (
          <div key={promotion.id}  className='d-flex p-3 rounded inline-block cursor-pointer hover:scale-300 ease-in-out duration-300 border border-dark '>
            <div className="d-flex flex-column justify-content-center">
              <img src={promotion.imageUrl} alt='promotion picture here'/>
              <p>{promotion.title}</p>
            </div>
          </div>
        ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={150} />
    </div>
    </>
  );
};

export default Promotions;