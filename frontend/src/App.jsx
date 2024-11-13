import { Container, Stack, Text } from "@chakra-ui/react";
import Navbar from "./component/navbar";
import { useState } from 'react'
import UserGrid from "./component/UserGrid";
import { Toaster } from "@/components/ui/toaster"
export const BASE_URL = "http://127.0.0.1:5000/api"
function App() {
	const [users, setUsers] = useState([])

	return (
		<Stack minH={"100vh"}>
			<Navbar setUsers={setUsers} />

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
				<UserGrid users={users} setUsers={setUsers} />
			</Container>
			<Toaster />
		</Stack>
  )
}

export default App
