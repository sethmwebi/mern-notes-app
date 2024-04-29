import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/notes-api";

interface NavBarLoggedInViewProps {
  user: User;
  onLogoutSuccessful: () => void;
}

const NavbarLoggedInView = ({
  user,
  onLogoutSuccessful,
}: NavBarLoggedInViewProps) => {
  async function logout() {
    try {
      await NotesApi.logout();
      onLogoutSuccessful();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Navbar.Text className="me-2">Signed in as: {user.username}</Navbar.Text>
      <Button onClick={logout}>Log out</Button>
    </>
  );
};

export default NavbarLoggedInView;
