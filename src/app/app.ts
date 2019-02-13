import { Model as Nav } from '@mod/nav';
import { Model as Lander } from '@mod/lander/lander.tag';

class UserConfig {
  gtag: string;
}

export class App {
  cfg: UserConfig;
  nav: Nav;
  lander: Lander;
}

