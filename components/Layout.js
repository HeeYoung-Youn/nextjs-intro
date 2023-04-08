import NavBar from "./NavBar";

export default function Layout({ children }) {
  console.log("hi");
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
