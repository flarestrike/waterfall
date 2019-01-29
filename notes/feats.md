# Features

## Stages

- Jan, prototyping
- Feb, polished views/ fund raising - draft
- Mar, feature decisions
- Apr, editor, direct edit tool
- May, marketing/ fund raising - 1
- Jun, auth
- Jul, config/ app - view
- Aug, plans/ app - auth
- Sep, stats/ app - editor
- Oct, marketing/ fund raising - 2
- Nov, editor, inplace/ app - config
- Dec, secretary mode (pay for form filling/tutoring)

## UI

- [x] infra
  - anchor/fragments
  - title
  - langs
  - viewer
  - centralized locales
  - data loader
  - configs
- [x] nav
  - top
  - side
- [x] lander
  - [x] summary
    - gender, birth in 1980s
    - email/ig/phone
    - location, relocation places
    |
    - professionals
    - main skill set
  - [x] exps
    - tech stacks
    - roles | projects
  - [x] educations
    - tech stacks
    - orgs | projects

## Detail

- display
  - detailed
    - all included
  - complete
    - projects without achievements
  - compact
    - projects without achievements, tech-stacks
  - rough
    - no projects
    - no remarkables
- section
  - layout
  - views
    - intro(basic/common/misc/meta) info
    - list
      - icon
      - name
      - item
        - icon
        - topic
        - contents
    - list-builder
      - roles/years/projects/orgs/locations/techs/skills counter
      - top N of topic
    - stage
      - composed by org/roles/projects
    - project
      - date
      - skillset
      - sample images
      - achievements
      - awards
      - note (in private)
    - role
      - date
      - responsibilities
      - remarkables
    - org
      - tilte
      - locations
    - map

## Common

- wb-img
  - no need to have `assets/imgs` prefix
  - full path for absolute url
  - lazy load

## Dev

- [x] basic ci
- [x] cd to gh-pages
