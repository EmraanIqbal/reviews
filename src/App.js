import { Container, Heading, Text } from "@chakra-ui/layout";
import "./App.css";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Container maxW="container.md">
        <Heading textAlign="center" mt="30" mb="15">
          Our Reviews
        </Heading>
        <div className="underLine"></div>
        <Review />
      </Container>
    </>
  );
}

export default App;
