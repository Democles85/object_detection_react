// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { ObjectDetector } from './components/objectDetector';
import Header from './components/Header/Header';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2127;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <div>Upload an Image</div>
      <ObjectDetector />
    </AppContainer>
  );
}

export default App;
