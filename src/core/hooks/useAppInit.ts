import { useEffect } from 'react';
import { AppServices } from '../../services';

export function useAppInit() {
  useEffect(() => {
    AppServices.notifications.configureChannel();
  }, []);
}
