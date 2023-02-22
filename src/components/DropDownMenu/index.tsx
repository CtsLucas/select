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
  const { logOut, currentUser } = useAuth();

  const avatarName = currentUser?.displayName
    ? currentUser?.displayName[0].toUpperCase()
    : currentUser?.email?.[0].toUpperCase() || '';

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>
        <IconAvatar>{avatarName}</IconAvatar>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={logOut}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
