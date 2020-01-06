import {Button} from '../../types/viber';
import LOCALIZATION from '../../localization';

export enum Replies {
  'getTodayWeather' = 'getTodayWeather',
  'getWeather3Days' = 'getWeather3Days',
  'storm' = 'shtormWeatherIncoming'
}

export const defaultKeyboard: {
  keyboard: {Type: string; DefaultHeight: boolean; BgColor: string; Buttons: Button[]};
} = {
  keyboard: {
    Type: 'keyboard',
    DefaultHeight: true,
    BgColor: '#FFFFFF',
    Buttons: [
      {
        Columns: 3,
        Rows: 1,
        BgColor: '#33ccff',
        BgLoop: true,
        ActionType: 'reply',
        ActionBody: Replies.getTodayWeather,
        Text: LOCALIZATION.tommorow,
        TextSize: 'regular',
        TextVAlign: 'middle',
        TextHAlign: 'center',
        TextOpacity: 60
      },
      {
        Columns: 3,
        Rows: 1,
        BgColor: '#33ccff',
        BgLoop: true,
        ActionType: 'reply',
        ActionBody: Replies.getWeather3Days,
        Text: LOCALIZATION.threeDays,
        TextSize: 'regular',
        TextVAlign: 'middle',
        TextHAlign: 'center',
        TextOpacity: 60
      },
      {
        Columns: 6,
        Rows: 1,
        BgColor: '#33ccff',
        BgLoop: true,
        ActionType: 'reply',
        ActionBody: Replies.storm,
        Text: LOCALIZATION.storms,
        TextSize: 'regular',
        TextVAlign: 'middle',
        TextHAlign: 'center',
        TextOpacity: 60
      }
    ]
  }
};
