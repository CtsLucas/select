import { useAuth } from '../../contexts/AuthContext';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  IconAvatar,
} from './styles';

export function DropDownMenu() {
  const { logOut } = useAuth();

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <IconAvatar>LS</IconAvatar>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={logOut}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
