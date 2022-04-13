import * as React from "react";
import { footerSections } from "../App";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface UserPageProps {}

const UserPage: React.FunctionComponent<UserPageProps> = () => {
  return (
    <>
      <Header />
      <main className="container" style={{ color: "#bbb" }}>
        Тут тоже пока ничего нет!!!
      </main>
      <Footer sections={footerSections} />
    </>
  );
};

export default UserPage;
