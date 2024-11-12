import { Button, Input, Flex, Box, Textarea } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Field } from "@/components/ui/field"
import React from 'react'
import { BiAddToQueue } from "react-icons/bi";
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const CreateUserModal = () => {
  return <>
        <DialogRoot>
            <DialogTrigger asChild>
            
                <Button
                    width={7}
                    height={9}
                    variant={"ghost"}
                    borderWidth={1}     // Border width
                    borderRadius="sm"   // Rounded corners
                    borderColor="gray.100"  // Border color (can be changed for dark mode)
                    backgroundColor="gray.100" // Background color for the box
                    _dark={{
                    borderColor: "gray.600",
                    backgroundColor: "gray.600"
                    }} // Different styles for dark mode
                    display="inline-flex" // Center the button inside
                    alignItems="center" 
                    justifyContent="center"
                >
                    <BiAddToQueue size={20}/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Internship</DialogTitle>
                </DialogHeader>
                <DialogBody pb={6}>
                    <Flex alignItems={"center"} gap={4}>
                        {/* left */}
                        <Field label={"Internship Name"}>
                            <Input placeholder="NVIDIA Ignite" />
                        </Field>
                        
                        {/* right*/}
                        <Field label={"Company Name"}>
                            <Input placeholder="NVIDIA" />
                        </Field>

                    </Flex>
                    <Field label={"Company Name"}>
                            <Textarea
                                resize={"none"}
                                overflow={"hidden"}
                                placeholder='This is for freshmen/sophomores'
                            />
                        </Field>
                        <RadioGroup mt={4}>
                            <Flex gap={5}>
                                <Radio value='Pending'>Pending</Radio>
                                <Radio value='Accepted'>Accepted</Radio>
                                <Radio value='Rejected'>Rejected</Radio>
                            </Flex>
                        </RadioGroup>
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Add</Button>
                </DialogFooter>
                <DialogCloseTrigger />
             </DialogContent>
        </DialogRoot>
  </>
}

export default CreateUserModal