import { NgModule } from '@angular/core';

import { WbIconTag } from './icon.tag';

const tags = [WbIconTag];
@NgModule({
    declarations: [...tags],
    providers: [],
    exports: [...tags]
})
export class WbIconModule {}
