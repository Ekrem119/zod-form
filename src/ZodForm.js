import * as React from "react";

import {
  Flex,
  Box,
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  surname: z.string().min(3),
  password: z.string().min(4),
  yearofbirth: z.string().min(4),
});

export default function ZodForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ChakraProvider>
      <Flex align="center" justify="center" mt={20}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name}>
            <FormLabel>Name </FormLabel>
            <input name="name" {...register("name")} />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.surname}>
            <FormLabel>Surname </FormLabel>
            <input name="surname" {...register("surname")} />
            <FormErrorMessage>{errors?.surname?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email address </FormLabel>
            <input name="email" {...register("email")} />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password </FormLabel>
            <input
              type={"password"}
              name="Password"
              {...register("password")}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.yearofbirth}>
            <FormLabel>Year of Birth </FormLabel>
            <input name="yearofbirth" {...register("yearofbirth")} />
            <FormErrorMessage>{errors?.yearofbirth?.message}</FormErrorMessage>
          </FormControl>
          <Checkbox
            name="checkbox"
            type="checkbox"
            required={true}
            {...register("checkbox")}
          ></Checkbox>
          <Button type="submit" m={10}>Submit</Button>
        </form>
      </Flex>
    </ChakraProvider>
  );
}
