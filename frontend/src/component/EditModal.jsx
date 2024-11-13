import { Button, Input, Flex, Box, Textarea } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Field } from "@/components/ui/field"
import React, { useState } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { Toaster, toaster } from "@/components/ui/toaster"
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
import { BASE_URL } from '../App';

function EditModal({setUsers, user}) {
    const[isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: user.name,
        company: user.company,
        description: user.description,
        status: user.status,
    });
    const handleEditUser = async (event) => {
        event.preventDefault();  // Prevents page refresh
        setIsLoading(true);
        try {
            const res = await fetch(BASE_URL + "/internships/" + user.id, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs)
            })
            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.error)
            }
            setUsers((prevUsers) => prevUsers.map((u) => u.id === user.id ? data : u));
            toaster.create({
                description: "Internship updated successfully.",
                type: "success",
            })
        } catch(error) {
            toaster.create({
                description: "Error! Internship could not be updated due to missing field(s).",
                type: "error",
            })
        } finally {
            setIsLoading(false);
        }
    }
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
            <form onSubmit={(e) => handleEditUser(e)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Internship</DialogTitle>
                    </DialogHeader>
                    <DialogBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            {/* left */}
                            <Field label={"Internship Name"}>
                                <Input placeholder="Example: STEP"
                                    value={inputs.name}
                                    onChange={(e) => setInputs((prev) => ({ ...prev, name: e.target.value}))} 
                                />
                            </Field>
                            
                            {/* right*/}
                            <Field label={"Company Name"}>
                                <Input placeholder="Example: Google" 
                                    value={inputs.company}
                                    onChange={(e) => setInputs((prev) => ({ ...prev, company: e.target.value}))}
                                />
                            </Field>

                        </Flex>
                        <Field label={"Company Name"}>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder='Role, Start and End dates, etc.'
                                    value = {inputs.description}
                                    onChange={(e) => setInputs((prev) => ({ ...prev, description: e.target.value}))}
                                />
                            </Field>
                            <RadioGroup 
                                mt={4} 
                                value={inputs.status} // This binds the RadioGroup to the current status value
                                onChange={(e) => setInputs((prev) => ({ ...prev, status: e.target.value}))}
                            >
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
                        <DialogActionTrigger asChild>
                            <Button 
                                type='submit' onClick={(e) => handleEditUser(e)} isLoading={isLoading}
                            >Update</Button>
                        </DialogActionTrigger>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </form>
        </DialogRoot>
  </>
}

export default EditModal