import React, { useEffect, useState } from 'react';
import { isLoggedInVar } from '../../apollo';
import { removeAccessToken } from '../../Token';
import { useNavigate } from 'react-router-dom';
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
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { SearchIcon } from '@chakra-ui/icons';
import { FaUserCheck } from 'react-icons/fa';

export default function Header(props) {
  const [searchTextHeader, setSearchTextHeader] = useState('');
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAccessToken();
    isLoggedInVar(false);
    navigate('/');
  };

  console.log(props.setHeaderSearchtoChildren);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      isLoggedInVar(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedInVar());
  }, [isLoggedInVar()]);

  return (
    <Box
      mx="auto"
      whiteSpace="nowrap"
      position="fixed"
      width="100%"
      boxShadow="md"
      zIndex="999"
    >
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
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href="/" ml={3}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              Kwanyeol and the kids.
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <InputGroup display={{ base: 'none', md: 'inline-flex' }}>
            <Input
              className="Input"
              type="text"
              width="200px"
              variant="outline"
              defaultValue={searchTextHeader}
              onChange={e => {
                setSearchTextHeader(e.target.value);
              }}
              placeholder={`검색`}
            />
            <InputRightAddon>
              <Button
                h="1.75rem"
                size="sm"
                borderRadius="10px"
                children={<SearchIcon color="green.500" />}
                onClick={() => {
                  props.setHeaderSearchtoChildren(searchTextHeader);
                  navigate(`/lectures/all/all&page=${searchTextHeader}`);
                }}
              ></Button>
            </InputRightAddon>
          </InputGroup>
          {isLoggedInVar() ? (
            <>
              <Link href={'/userinfo'}>
                <Box mt={2}>
                  <FaUserCheck size="25" />
                </Box>
              </Link>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                onClick={handleLogout}
                cursor={'pointer'}
                marginTop={2}
                href={'/'}
                pr={2}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'/login'}
              >
                Log in
              </Button>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'green.400'}
                href={'/signup'}
                _hover={{
                  bg: 'green.300',
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('gray.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'black.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'black.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const NAV_ITEMS = [
  {
    label: '강의',
    href: '/lectures/all/all?page=1',
    children: [
      {
        label: '프론트엔드',
        subLabel: '리액트',
        href: '#',
      },
      {
        label: '백엔드',
        subLabel: '장고',
        href: '#',
      },
    ],
  },
  {
    label: '소개',
    href: '/lectures',
    children: [
      {
        label: '금쪽같은 내새끼',
        subLabel: 'abcdefg',
        href: '#',
      },
      {
        label: '관열이와 아이들',
        subLabel: 'ㄱㄴㄷㄹㅁㅂㅅ',
        href: '#',
      },
    ],
  },
  {
    label: '로드맵',
    href: '/lectures',
    children: [
      {
        label: '금쪽같은 내새끼',
        subLabel: 'abcdefg',
        href: '#',
      },
      {
        label: '관열이와 아이들',
        subLabel: 'ㄱㄴㄷㄹㅁㅂㅅ',
        href: '#',
      },
    ],
  },
  {
    label: '커뮤니티',
    children: [
      {
        label: '금쪽같은 내새끼',
        subLabel: 'abcdefg',
        href: '#',
      },
      {
        label: '관열이와 아이들',
        subLabel: 'ㄱㄴㄷㄹㅁㅂㅅ',
        href: '#',
      },
    ],
  },
];
