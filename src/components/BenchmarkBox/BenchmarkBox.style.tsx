import styled from '@emotion/styled';

export const BenchmarkBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 170px;
  padding: 10px;
`;

export const BrandImgWrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const BrandImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
`;

export const Text = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
`;
