import { Box, Card, Flex, Heading, IconButton, Text, Icon } from '@chakra-ui/react'
import { Avatar } from "@/components/ui/avatar"
import React from 'react'
import { BiTrash } from 'react-icons/bi'
import EditModal from './EditModal'

const UserCard = ({ user }) => {
  return <Card.Root>
        <Card.Header>
            <Flex>
                <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                    <Avatar src="https://img.icons8.com/?size=100&id=cjUb4tRvBCNt&format=png&color=000000" />
                    <Box>
                        <Heading size='sm'>{user.name}</Heading>
                        <Text>{user.company}</Text>
                    </Box>
                </Flex>
                <Flex>
                    <EditModal />
                    <IconButton
                        variant={"ghost"}
                        colorPalette={"red"}
                        size={"sm"}
                        aria-label='see menu'
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