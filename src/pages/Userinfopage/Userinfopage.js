import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Tabs, Tab, TabPanel, TabPanels, TabList, Box } from '@chakra-ui/react';
// import WholeLectures from '../WholeLectures/WholeLectures';
function UserInfoPage() {
  return (
    <>
      <Header />
      <Box>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
}
export default UserInfoPage;
