﻿// @ts-check

import { goBack } from "../DomHelpers/DomHelpers";
import { registerHistoryBack, unRegisterHistoryBack } from "../HistoryBackHelper/HistoryBackHelper";
import { registerEvent, unRegisterEvent } from "../EventDelegator/EventDelegator";
import { registerMediaQuery, unRegisterMediaQuery } from "../MediaQueryMatcher/MediaQueryMatcher";
import { registerDetectTheme, unRegisterDetectTheme } from "../DetectThemeHelper/DetectThemeHelper";

// @ts-ignore
window.Skclusive = {
  // @ts-ignore
  ...window.Skclusive,
  Material: {
    // @ts-ignore
    ...(window.Skclusive || {}).Material,
    Script: {
      goBack,
      registerEvent,
      unRegisterEvent,
      registerMediaQuery,
      unRegisterMediaQuery,
      registerHistoryBack,
      unRegisterHistoryBack,
      registerDetectTheme,
      unRegisterDetectTheme,
    }
  }
};
