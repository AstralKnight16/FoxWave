import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { NOTIFICATION_CHANNEL_ID } from '../../core/constants/channels';

export async function configureChannel() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(NOTIFICATION_CHANNEL_ID, {
      name: 'Radio Playback',
      importance: Notifications.AndroidImportance.LOW,
    });
  }
}
