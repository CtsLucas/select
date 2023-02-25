import { useAuth } from '../../contexts/AuthContext';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuSeparator,
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
          <DropdownMenuItem>{currentUser?.email}</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logOut}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
