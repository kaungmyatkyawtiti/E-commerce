import AdminPotion from "./AdminPotion";
import MyContainer from "./MyContainer";
import MyLogo from "./MyLogo";
import Navbar from "./Navbar";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="py-5 border-b border-border">
      <MyContainer
        className="flex items-center justify-between"
      >
        {/* logo */}
        <MyLogo />

        {/* nav  */}
        <Navbar />

        {/* admin */}
        <AdminPotion />
      </MyContainer>
    </header>
  )
}
