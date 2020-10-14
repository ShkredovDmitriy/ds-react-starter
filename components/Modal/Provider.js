import { createContext, useMemo, useContext, useState } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { MODALS } from './constants';
import MODALS_CONFIG, { ROUTE_TYPE } from './config';
import stateModal from './stateModal';
import routeModal from './routeModal';

const ModalsContext = createContext({});

export const ModalsConsumer = ModalsContext.Consumer;
export const useModals = () => useContext(ModalsContext);

const modalsList = R.values(MODALS);

const ModalsProvider = ({
  children,
  ...props
}) => {
  const Router = useRouter();
  const initialModals = useMemo(() => {
    return R.reduce((acc, name) => {
      const initialModal = R.propOr({
        open: false,
      }, name, props);

      return {
        ...acc,
        [name]: initialModal,
      }
    }, {}, modalsList);
  }, []);

  const [modals, setModals] = useState(initialModals);

  const modalsValue = useMemo(() => {
    return R.reduce((acc, item) => {
      let modal;

      if (item.type === ROUTE_TYPE) {
        modal = routeModal({
          ...item,
          Router,
        });
      } else {
        modal = stateModal({
          name: item.name,
          modals,
          setModals,
        });
      }

      return {
        ...acc,
        [item.name]: modal,
      };
    }, {}, MODALS_CONFIG);
  }, [modals, Router]);

  return (
    <ModalsContext.Provider value={modalsValue}>
      {children}
    </ModalsContext.Provider>
  );
};

export default ModalsProvider;
