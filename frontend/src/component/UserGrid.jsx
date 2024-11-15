import { Flex, Grid, Spinner, Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
//import { USERS } from '../dummy/dummy'
import UserCard from './UserCard'
import { BASE_URL } from '../App';

const UserGrid = ({users, setUsers}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(BASE_URL + "/internships")
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setUsers(data);
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, [setUsers]);
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers}/>
        ))}
      </Grid>

      {isLoading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"x1"} />
        </Flex>
      )}
      {!isLoading && users.length ===0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"x1"}>
            <Text as={"span"} fontSize={"2x1"} fontWeight={"bold"} mr={2}>
              No internships found.
            </Text>
            Start applying!
          </Text>
        </Flex>
      )}
    </>
  )
}

export default UserGrid