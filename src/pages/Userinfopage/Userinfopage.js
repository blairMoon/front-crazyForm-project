import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Box,
  Flex,
} from '@chakra-ui/react';
import EditMember from '../EditMember/EditMember';
import MyLecture from '../Mylecturepage/Mylecture';
// import WholeLectures from '../WholeLectures/WholeLectures';
function UserInfoPage() {
  return (
    <>
      <Flex direction="column" align="center" h="100%">
        <Box mt={20} w="900px" h="100%">
          <Tabs isFitted variant="enclosed" colorScheme={'#003C93'}>
            <TabList borderColor={'#003C93'}>
              <Tab>수강중인 강좌</Tab>
              <Tab>회원정보수정</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{/* <MyLecture /> */}</TabPanel>
              <TabPanel>
                <EditMember />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
}
export default UserInfoPage;
