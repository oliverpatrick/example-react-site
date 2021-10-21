import styled from 'styled-components/macro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel() {
  return (
    <Carousel>
      <div></div>
      <div></div>
      <div></div>
    </Carousel>
  );
}

export default ImageCarousel;

const CarouselWrapper = styled.div`
  width: 100%;
`;
