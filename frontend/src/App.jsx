import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./component/navbar";
import UserGrid from "./component/UserGrid";
function App() {

  return (
    <Stack minH={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        	<Text
				fontSize={{ base: "3xl", md: "50" }}
				fontWeight={"bold"}
				letterSpacing={"2px"}
				textTransform={"uppercase"}
				textAlign={"center"}
				mb={8}
			>
				<Text as={"span"} bgGradient={"linear-gradient(to right, #06b6d4, #3b82f6)"} bgClip={"text"}>
					Listernships
				</Text>
				🚀
			</Text>
			<UserGrid />
      </Container>
    </Stack>
  )
}

export default App
