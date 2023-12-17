import { Center, Heading } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface Props {}

const Title: FunctionComponent<Props> = () => {
  return (
    <>
      <Center pb={4}>
        <Heading size={"2xl"}>Flagright Api</Heading>
      </Center>
    </>
  );
};

export default Title;
