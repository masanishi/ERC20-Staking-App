import type { NextPage } from "next";
import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import Stake from "../components/Stake";
import Howto from "../components/Howto";

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <Container maxW={"1200px"}>
      <SimpleGrid columns={1} spacing={4} mt={10}>
        <Howto />
      </SimpleGrid>
      <Stake />
    </Container>
  );
};

export default Home;
