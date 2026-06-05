import background from "../../assets/overwtch2main.jpeg";
import logo from "../../assets/overwatch2logovsign.png";
import logoText from "../../assets/Overwatch2logotext.png";

import MenuSecundario from "../../components/main/MenuSecundario";
import MenuItem from "../../components/main/MenuItem";

import styles from "./Main.module.css";

function Main() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${background})`
      }}
    >

      <div className={styles.logoContainer}>
        <img
          src={logo}
          alt="logo de overwatch"
          className={styles.logo}
        />

        <img
          src={logoText}
          alt="Overwatch Text"
          className={styles.logoText}
        />
      </div>

      <div className={styles.menuPrincipal}>
        <MenuItem texto="PLAY" />
        <MenuItem texto="HEROES" />
        <MenuItem texto="SHOP" />
        <MenuItem texto="BATTLE PASS" />
      </div>

      <div className={styles.menuSecundario}>
        <MenuSecundario texto="LOOT BOXES" />
        <MenuSecundario texto="SOCIAL" />
        <MenuSecundario texto="CAREER PROFILE" />
        <MenuSecundario texto="CHALLENGES" />
      </div>

    </div>
  );
}

export default Main;