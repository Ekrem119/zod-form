import * as React from "react";

import {
 Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={useFormErrorStyles.email}>
          <FormLabel>Email address </FormLabel>
          <input name="email" {...register("email")} />
          <FormErrorMessage>{error?.email?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </ChakraProvider>
  );
}
