import FullScreenSection from './FullScreenSection';
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, VStack,FormErrorMessage } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useEffect, useState } from 'react';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/AlertContext';
import Alert from "./Alert";

const Calculator = () => {
  //const [response, setResponse] = useState({});
  const [answer, setAnswer] = useState({});
  const {isLoading, response, submit} = useSubmit();
  const {onOpen, onResult} = useAlertContext();
  //let result = null;
  const formik = useFormik({
    initialValues: {rd: "", ex: "", hasGrant: false},
    onSubmit: (values) => {
      submit(values);
    },
    validationSchema: Yup.object({
      rd: Yup.number().required("Required").positive("This must have positive number").integer("Must integer").min(50).max(100),
      ex: Yup.number().required("Required").positive("This must have positive number").integer("Must integer").min(50).max(100),
      hasGrant: Yup.bool()
    }),
  })

  useEffect(() => {
    if(response){
      onOpen();
      onResult(response)
      console.log(response, "useEffect")
    }

  }, [response])

  return (
    <FullScreenSection>
        <VStack w="768px" border={1} bgColor="gray.50" minH="50vh" p={10} alignItems="flex-start">
          <Heading>Exam Calculator </Heading>
          <Box w="full" rounded="md" >
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={formik.errors.rd && formik.touched.rd}>
                  <FormLabel htmlFor="rd">Рейтинг допуска</FormLabel>
                  <Input placeholder="50-100" id="rd" name="rd"  value={formik.values.rd} {...formik.getFieldProps("rd")}/>
                  <FormErrorMessage>{formik.errors.rd}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.ex && formik.touched.ex}>
                  <FormLabel htmlFor="ex">Экзамен</FormLabel>
                  <Input placeholder="50-100" id="ex" name="ex" value={formik.values.ex} {...formik.getFieldProps("ex")}/>
                  <FormErrorMessage>{formik.errors.ex}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.hasGrant && formik.touched.hasGrant}>
                  <Checkbox name="hasGrant" id="hasGrant" {...formik.getFieldProps('hasGrant')}>На гранте</Checkbox>
                  <FormErrorMessage>{formik.errors.hasGrant}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="blue" isLoading={isLoading}>Calculate</Button>
              </VStack>
            </form>
            <Heading></Heading>
          </Box>
        </VStack>
      {!response ? '' : <Alert result = {response}/>}
    </FullScreenSection>
  );
}
export default Calculator;