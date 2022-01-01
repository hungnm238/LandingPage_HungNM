import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
