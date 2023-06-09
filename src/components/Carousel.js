import React, {useState} from 'react'

const Carousel = (props) => {
const [currentImage, setCurrentImage] = useState(0)

const handleCurrentImage = (num) => {
  let nextImg = currentImage
  nextImg += num
  console.log(num)
  console.log(currentImage)
  nextImg < props.each.image.length && nextImg >= 0
    ? setCurrentImage(nextImg)
    : nextImg >= props.each.image.length - 1
    ? setCurrentImage(0)
    : nextImg < 0
    ? setCurrentImage(props.each.image.length - 1)
    : console.log(" what heck");
  
}
      return (
        <div className='post-image'>
        {props.each.image.length > 1 ?
        <span className='carousel-button' onClick={() => handleCurrentImage(-1)}><i class='bx bx-chevrons-left' size="lg" ></i></span>
        : null}
      <div className="image-container">
          <img className='img-post' src={props.each.image[currentImage]} alt="" />
        </div>
          {props.each.image.length > 1 ?
          <span className='carousel-button' onClick={() => handleCurrentImage(+1)}><i className='bx bx-chevrons-right'></i></span>
          : null}
        </div>
      );


}
export default Carousel