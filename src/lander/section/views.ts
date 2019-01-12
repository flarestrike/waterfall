import { WlListView } from './list/list.view';
import { WlIntroView } from './intro/intro.view';
import { WlUnknownView } from './unknown/unknown.view';

const unknown = WlUnknownView;

export const viewList = [
  WlIntroView,
  WlListView, unknown
];
export const views = {
  WlIntroView,
  WlListView, unknown
};
