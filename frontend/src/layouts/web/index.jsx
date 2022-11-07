import Header from "./header";
import NavBar from "./header/NavBar";
import Content from "./main";

const WebLayout = (props) => {
  return (
    <>
      <NavBar />
      <Header />
      <Content sidemenu={ props.sidemenu }>{ props.children }</Content>
    </>
  )
}

WebLayout.defaultProps = {
  sidemenu: true
}

export default WebLayout;