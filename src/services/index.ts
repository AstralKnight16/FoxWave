import * as Audio from './audio/player';
import * as Network from './network/api';
import * as Notifications from './notifications/channel';

export const AppServices = {
  notifications: Notifications,
  audio: Audio,
  network: Network,
};
