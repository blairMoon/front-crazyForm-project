import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LectureHeader from '../LectureHeader/LectureHeader';
const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`;
function Layout({ children }) {
  console.log(children);

  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
