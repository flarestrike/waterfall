import { WlStageView } from './stage/stage.view';
import { WlListView } from './list/list.view';
import { WlIntroView } from './intro/intro.view';
import { WlUnknownView } from './unknown/unknown.view';

const unknown = WlUnknownView;

export const viewList = [
  WlStageView, WlIntroView,
  WlListView, unknown
];
export const views = {
  WlStageView, WlIntroView,
  WlListView, unknown
};
