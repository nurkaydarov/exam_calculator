import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  Text, VStack,
} from '@chakra-ui/react';
import {useAlertContext} from '../context/AlertContext';
import { useEffect, useRef } from 'react';

const Alert = ({result}) => {
  const {isOpen, onClose, } = useAlertContext();
  const cancelRef = useRef();
  useEffect(() => {
    console.log(result, "Alert");
  }, [result])
  return (
    <VStack alignItems="flex-start" justifyContent="flex-start">
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
              <AlertDialogHeader>RESULT</AlertDialogHeader>
              <AlertDialogBody>
                <VStack spacing={3}>
                  <Text>Экзамен: {result.grade}</Text>
                  <Text>GPA: {result.gradePoints}</Text>
                  <Text>Буквенный эквивалент: {result.letterGrade}</Text>
                </VStack>
              </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
    </VStack>
  )
}

export default Alert;