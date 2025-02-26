import Exercise from "./Exercise";
import Train from "./Train/Train";
import { ContainerHome } from './style';

const Home = () => {
  return (
    <>
      <ContainerHome>
        <Train />
        <Exercise/>
      </ContainerHome> 
    </>
  );
};

export default Home;
