import Image from "next/image";
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

const SplineContainer = styled.div`
  width: 100%;
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }

  @media (min-width: 769px) {
    height: 100vh;
  }
`;

export default function Home() {
  return (
    <main>
      <SplineContainer>
        <Spline
          scene="https://prod.spline.design/UnQM4XpRbf3yvA4s/scene.splinecode" 
        />
      </SplineContainer>
    </main>
  );
}
