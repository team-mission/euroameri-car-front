import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MEDIA_QUERIES } from '@constants/styles';

export const ListSection = styled.section`
  overflow: hidden;
  width: 100%;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-size: 1.4rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.2rem;
  }

  ${MEDIA_QUERIES.mobile} {
    font-size: 1rem;
  }
`;

export const SlideList = styled(Slider)`
  position: relative;

  & .slick-arrow {
    position: absolute;
    top: -1rem;
    right: 0.1rem;
    left: unset;
    width: 2.5rem;
    height: 2.5rem;

    ${MEDIA_QUERIES.tablet} {
      right: 0.5rem;
      width: 2rem;
      height: 2rem;
    }

    ${MEDIA_QUERIES.mobile} {
      right: 1rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  & .slick-prev {
    right: 2.6rem;

    ${MEDIA_QUERIES.tablet} {
      right: 2.8rem;
    }

    ${MEDIA_QUERIES.mobile} {
      right: 3.3rem;
    }
  }

  & .slick-list {
    padding: 0.5rem 0;

    ${MEDIA_QUERIES.mobile} {
      overflow: unset;
    }
  }

  & .slick-prev:before,
  .slick-next:before {
    color: gray;
    font-size: 2.3rem;

    ${MEDIA_QUERIES.tablet} {
      font-size: 2rem;
    }
  }

  & .slick-slide {
    padding: 0 5px;
  }
`;
