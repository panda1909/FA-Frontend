import MainNavbar from "./../Components/Shared/NavBar/MainNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main style={{marginTop: 100}}>{children}</main>
    </>
  );
};

export default DashboardLayout;
