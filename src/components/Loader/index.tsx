import { ReactPortal } from '../ReactPortal';
import { Spinner } from '../Spinner';

import { Overlay } from './styles';

export function Loader() {
  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={32} />
      </Overlay>
    </ReactPortal>
  );
}
