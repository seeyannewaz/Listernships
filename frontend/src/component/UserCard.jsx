import { Box, Card, Flex, Heading, IconButton, Text, Icon, useDrawer } from '@chakra-ui/react'
import { Avatar } from "@/components/ui/avatar"
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import EditModal from './EditModal'
import { BASE_URL } from '../App'
import { Toaster, toaster } from "@/components/ui/toaster"

const UserCard = ({ user, setUsers }) => {
    const handleDeleteUser = async () => {
        try {
            const res = await fetch(BASE_URL + "/internships/" + user.id, {
                method: "DELETE",
            })
            const data =  await res.json();
            if(!res.ok) {
                throw new Error(data.error)
            }
            setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id))
            toaster.create({
                description: "Internship deleted successfully.",
                type: "success",
            })
        } catch(error) {
            toaster.create({
                description: "Error! Internship could not be deleted.",
                type: "error",
            })

        }
    }
    return <Card.Root>
        <Card.Header>
            <Flex>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src={user.imgUrl}/>
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.company}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <EditModal user={user} setUsers={setUsers}/>
                    <IconButton
                        variant={"ghost"}
                        colorPalette={"red"}
                        size={"sm"}
                        aria-label='see menu'
                        onClick={handleDeleteUser}
                    >
                        <BiTrash size={20} />
                    </IconButton>

                </Flex>
            </Flex>
        </Card.Header>
        <Card.Body>
            <Text>
                {user.description}
            </Text>
        </Card.Body>
    </Card.Root>
}

export default UserCard