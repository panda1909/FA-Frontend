import MainNavbar from "../Components/Shared/NavBar/MainNavbar";
// TODO REMOVE UNNECESSARY IMPORTS

const DefaultLayout = ({ children }) => {
  return (
    <>
      <main style={{marginTop: 120}}>{children}</main>
    </>
  );
};

export default DefaultLayout;
