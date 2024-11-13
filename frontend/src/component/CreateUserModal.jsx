import { Button, Input, Flex, Box, Textarea, } from '@chakra-ui/react'
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Field } from "@/components/ui/field"
import { Toaster, toaster } from "@/components/ui/toaster"
import React, { useState } from 'react'
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
import { BASE_URL } from '../App';

const CreateUserModal = ({setUsers}) => {
    const[isLoading, setIsLoading] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        company: "",
        description: "",
        status: "",
    });
    const handleCreateUser = async (event) => {
        event.preventDefault();  // Prevents page refresh
        setIsLoading(true);

        try {
            const res = await fetch(BASE_URL + "/internships", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",   
                },
                body: JSON.stringify(inputs),
            })

            const data = await res.json();
            if(!res.ok) {
                throw new Error(data.error)
            }
            toaster.create({
                description: "Internship created successfully.",
                type: "success",
            })
            setUsers((prevUsers) => [...prevUsers, data])
            setInputs({
                name: "",
                company: "",
                description: "",
                status: "",
            });
        } catch (error) {
            toaster.create({
                description: "Error! Internship could not be created due to missing field(s).",
                type: "error",
            })
        } finally{
            setIsLoading(false);
        }
    };
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
            <form onSubmit={(e) => handleCreateUser(e)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Internship</DialogTitle>
                    </DialogHeader>
                    <DialogBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            {/* left */}
                            <Field label={"Internship Name"}>
                                <Input placeholder="Example: STEP" 
                                    value={inputs.name}
                                    onChange={(e) => setInputs({...inputs, name: e.target.value})}
                                />
                            </Field>
                            
                            {/* right*/}
                            <Field label={"Company Name"}>
                                <Input placeholder="Example: Google" 
                                    value={inputs.company}
                                    onChange={(e) => setInputs({...inputs, company: e.target.value})}
                                />
                            </Field>

                        </Flex>
                        <Field label={"Description"}>
                                <Textarea
                                    resize={"none"}
                                    overflow={"hidden"}
                                    placeholder= 'Role, Start and End dates, etc.'
                                    value={inputs.description}
                                    onChange={(e) => setInputs({...inputs, description: e.target.value})}
                                />
                            </Field>
                            <RadioGroup mt={4}>
                                <Flex gap={5}>
                                    <Radio value='Pending'
                                        onChange={(e) => setInputs({...inputs, status: e.target.value})}
                                    >Pending</Radio>
                                    <Radio value='Accepted'
                                        onChange={(e) => setInputs({...inputs, status: e.target.value})}
                                    >Accepted</Radio>
                                    <Radio value='Rejected'
                                        onChange={(e) => setInputs({...inputs, status: e.target.value})}
                                    >Rejected</Radio>
                                </Flex>
                            </RadioGroup>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <DialogActionTrigger>
                            <Button type='submit' onClick={(e) => handleCreateUser(e)} isLoading={isLoading}>Add</Button>
                        </DialogActionTrigger>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </form>
        </DialogRoot>
  </>
}

export default CreateUserModal