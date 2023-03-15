import { ReactPortal, Spinner } from '@components';

import { Overlay } from './styles';

export default function Loader() {
  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={32} />
      </Overlay>
    </ReactPortal>
  );
}
