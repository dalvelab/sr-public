import { useState, useEffect } from "react";

import { Container } from "@components/UI";
import { IconLogo } from "@components/Icons";
import { useScrollBlock } from "@hooks/useScrollBlock";

import { Button } from "./Button";
import { MobileSidebar } from "./Menu";
import "./MobileMenuContainer.scss";

export const MobileMenuContainer: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isActive) {
      blockScroll();
    }
    return function cleanup() {
      allowScroll();
    };
  }, [allowScroll, blockScroll, isActive]);

  const onButtonClick = () => {
    setIsActive(!isActive);
  };

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
          <Button isActive={isActive} onClick={() => onButtonClick()} />
        </Container>
      </nav>
      {isActive && <MobileSidebar onClick={() => setIsActive(false)} />}
    </>
  );
};
