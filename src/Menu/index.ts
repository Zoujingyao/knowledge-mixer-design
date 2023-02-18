import MenuItem from './menuItem';
import SubMenu from './subMenu';
import Menu from './Menu';

type MenuType = typeof Menu & {
  Item: typeof MenuItem;
  SubMenu: typeof SubMenu;
};

const ExportMenu = Menu as MenuType;

ExportMenu.Item = MenuItem;
ExportMenu.SubMenu = SubMenu;

export default ExportMenu;
