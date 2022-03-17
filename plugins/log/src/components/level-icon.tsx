/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';
import { LogLevel } from '@backstage/core-plugin-api';

const levelEmoji: Record<LogLevel, string> = {
  debug: '🪲',
  info: 'ℹ️',
  warn: '⚠️',
  error: '⛔️',
};

const useStyles = makeStyles(() => ({
  icon: {
    marginLeft: 8,
    marginRight: 8,
  },
}));

export function LevelIcon({ level }: { level: LogLevel }) {
  const classes = useStyles();

  return (
    <span className={classes.icon} role="img" title={level} aria-label={level}>
      {levelEmoji[level]}
    </span>
  );
}
