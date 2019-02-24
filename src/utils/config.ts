
// settings definition explains
// env - development time settings
// config - build time released settings
// options - user level memorable settings
// preference - runtime settings
export class BaseConfig {
  team: string;
  dataUrl: string;
  gtag: string;
}

export class LanderConfig {
  fontSize = 'small';
  view = 30;
  lang = '';
  theme = 'light';
}
