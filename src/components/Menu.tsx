import { ReactNode, createContext, useContext } from "react";

type TMenuContext = {
  theme: string;
};

type TMunuProviderProps = {
  children: ReactNode;
};

const MenuContext = createContext<TMenuContext | null>(null);

export const MenuList = ({ children }: TMunuProviderProps) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <div>
        <ul>{children}</ul>
      </div>
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  const { theme } = useContext(MenuContext) as TMenuContext;
  console.log(theme);
  return <div>Menu Item</div>;
};
