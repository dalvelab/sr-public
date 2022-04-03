import { useState } from "react";

import { Container } from "@components/UI";
import { IconLogo } from "@components/Icons";

import { Button } from "./Button";
import { MobileSidebar } from "./Menu";
import "./MobileMenuContainer.scss";

export const MobileMenuContainer: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="nav__mobile__wrapper">
        <Container>
          <div className="nav__mobile__logo">
            {!isActive && (
              <>
                <IconLogo color="#3661ed" />
                <h6 className="logo__text">
                  <span className="font--primary">Строительные</span>{" "}
                  <span className="font--black">Решения</span>
                </h6>
              </>
            )}
          </div>
          <Button isActive={isActive} onClick={() => setIsActive(!isActive)} />
        </Container>
      </nav>
      {isActive && <MobileSidebar onClick={() => setIsActive(false)} />}
    </>
  );
};
