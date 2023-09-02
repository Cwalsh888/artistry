import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient } from 'react-query';

import NavBar from '../NavBar';
import AnimatedRoutes from "../Routes";

import {
  Container,
  PageContainer,
  Title,
  AltColor
} from "./styled";

const queryClient = new QueryClient();

const App = () => {
  
  return (
    <Container client={queryClient}>
      <Title>OPPABLACK <AltColor>/</AltColor>/ <AltColor>JAMESMAYBE</AltColor></Title>
      <PageContainer>
        <Router>
          <AnimatedRoutes />
          {/* <NavBar /> */}
        </Router>
      </PageContainer>
    </Container>
  );
};

export default App;
