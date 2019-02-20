import React from "react";
import CreateInNav from "src/components/CreateInNav";
import Settings from "src/components/Settings";
import { GiGingerbreadMan } from "react-icons/gi";
import { FaRegUserCircle, FaCookieBite } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Image, Popup, Button, Responsive } from "semantic-ui-react";

class TopBarNavigation extends React.Component {
  componentDidMount() {
    const { loadHomeData } = this.props;
    loadHomeData();
  }

  render() {
    const {
      user,
      modalOpenEvent,
      modalOpenLogin,
      isAuthenticated,
      userConfirm,
      logoutSubmit
    } = this.props;

    const handleOpenEvent = () => {
      modalOpenEvent();
    };
    const handleOpenLogin = () => {
      modalOpenLogin();
    };

    const handleLogout = () => {
      console.log("logout");
      logoutSubmit();
    };

    return (
      <div id="topBar">
        <NavLink exact to="/">
          <Image src="http://217.70.190.71/assets/tff-logo.png" size="medium" />
        </NavLink>
        


        {typeof user !== "undefined" ? (
          <div className="account">
            <NavLink exact to={`/infos-perso/${user.id}`}>
              <div id="user">
                <FaRegUserCircle />
                <span>{user.username}</span>
              </div>
            </NavLink>
            
            <div id="moneyAccount">
              <Popup
                trigger={<FaCookieBite />}
                content="Les cookies servent a participer aux évènements"
                position="bottom center"
              />
              {userConfirm === "" ? (
                <span>{user.credit}</span>
              ) : (
                <span>{userConfirm.credit}</span>
              )}
            </div>

            <div id="topBar-create">
              {isAuthenticated ? (
                <Responsive
                  as={Button}
                  onClick={handleOpenEvent}
                  id="creer"
                  minWidth={950}
                >
                  <h2>Créer Annonce</h2>
                </Responsive>
              ) : (

                <Button onClick={handleOpenLogin} id="login">Se connecter pour créer un annonce
                </Button>
              )}
              </div>
              <Button onClick={handleLogout} id="deco"><h2>Déconnexion</h2>
                </Button>

          </div>
          ) : ''}
      </div>
    );
  }
}
export default TopBarNavigation;
