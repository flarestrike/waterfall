import { NgModule } from '@angular/core';

import { WnCommonModule } from '../common/common.module';
import { WcConfigPop } from './config.pop';
import { WcConfigTag } from './config.tag';

const tags = [WcConfigTag];

@NgModule({
  imports: [
    WnCommonModule
  ],
  declarations: [
    WcConfigPop,
    ...tags],
  exports: [...tags]
})
export class WnConfigModule {}
