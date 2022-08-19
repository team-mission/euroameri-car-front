import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface VisibleProps {
  visible: boolean;
}

export const PartListModalWrapper = styled.section`
  display: ${(props: VisibleProps) => (props.visible ? 'block' : 'none')};
`;

export const PartListContent = styled.div`
  z-index: 1;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 900px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SlideList = styled(Slider)`
  margin: auto;
  width: 90%;

  & .slick-arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    z-index: 1;
    top: 50%;
  }

  & .slick-list {
    padding: 0.5rem 0;
  }

  & .slick-prev {
    left: -40px;
  }

  & .slick-next {
    right: -40px;
  }

  & .slick-prev:before,
  .slick-next:before {
    color: black;
    font-size: 2rem;
  }
`;

export const PartImgWrapper = styled.div``;

export const CloseBtn = styled.button`
  z-index: 1;
  position: fixed;
  text-align: center;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  cursor: pointer;
`;

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: darkgray;
  opacity: 0.8;
`;
