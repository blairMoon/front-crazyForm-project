import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { FaUserCheck } from 'react-icons/fa';

export default function LectureHeader() {
  return (
    <Box mx="auto" whiteSpace="nowrap" width="100%" boxShadow="md" zIndex="999">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Stack justify={{ base: 'center', md: 'start' }}>
          <Link href="/" ml={3} mr={6}>
            <Text
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              Kwanyeol and the kids.
            </Text>
          </Link>
        </Stack>

        <Stack direction={'row'} spacing={4}>
          <>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              cursor={'pointer'}
              href={'/userinfo'}
              pr={2}
            >
              내강의
            </Button>
            <Text>관열이와 아이들 소개</Text>
          </>
        </Stack>
      </Flex>
    </Box>
  );
}
