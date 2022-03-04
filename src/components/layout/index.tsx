import { FC, ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

type Props = { children: ReactNode };

const Layout: FC<Props> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
