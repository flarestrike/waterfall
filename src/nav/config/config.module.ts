import { NgModule } from '@angular/core';

import { WnCommonModule } from '../common/common.module';

import { WcItemsTag } from './items/items.tag';
import { WcConfigPop } from './config.pop';
import { WcConfigTag } from './config.tag';

const tags = [WcConfigTag];

@NgModule({
  imports: [
    WnCommonModule
  ],
  declarations: [
    WcItemsTag,
    WcConfigPop,
    ...tags],
  exports: [...tags]
})
export class WnConfigModule {}
