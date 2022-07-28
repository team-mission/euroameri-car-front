import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ListSection = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h2``;

export const SlideList = styled(Slider)`
  position: relative;

  & .slick-arrow {
    position: absolute;
    top: -1.5rem;
    right: 0.1rem;
    left: unset;
    width: 2.5rem;
    height: 2.5rem;
    @media (max-width: 828px) {
      top: -1.25rem;
    }
  }

  & .slick-list {
    padding: 0.5rem 0;
    @media (max-width: 828px) {
      overflow: unset;
    }
  }

  & .slick-prev {
    right: 2.8rem;
  }

  & .slick-prev:before,
  .slick-next:before {
    color: gray;
    font-size: 2.5rem;
  }

  & .slick-slide {
    padding: 0 0.5rem;
  }
`;
