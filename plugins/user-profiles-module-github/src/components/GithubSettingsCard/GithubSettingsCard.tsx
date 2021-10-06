/*
 * Copyright 2021 The Backstage Authors
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

export const GithubSettingsCard = () => {
  // TODO (ainhoa/chase/hhogg/himanshu/vincenzo): Use identity API to get current user info
  const entity = {
    kind: 'user',
    metadata: {
      namespace: 'github',
      name: 'brianna',
    },
  };
  const entityref = `${entity.kind}:${entity.metadata.namespace ?? 'default'}/${
    entity.metadata.name
  }`;
  // TODO (himanshu/ainhoa): call backend to get user profile
  return (
    <div>{entityref} - Need to get github readme user profile from backend</div>
  );
};
