import { Button, Input, Flex, Box, Textarea } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Field } from "@/components/ui/field"
import React from 'react'
import { BiEditAlt } from "react-icons/bi";
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

const EditModal = () => {
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
                    <BiEditAlt size={20}/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Internship</DialogTitle>
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
                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Update</Button>
                </DialogFooter>
                <DialogCloseTrigger />
             </DialogContent>
        </DialogRoot>
  </>
}

export default EditModal