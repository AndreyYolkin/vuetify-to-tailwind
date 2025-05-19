# Vuetify to Tailwind Migrator

A CLI tool for automated migration from Vuetify utility classes to Tailwind CSS. Currently supports conversion of standard class attributes and :class directives.

## Usage

You need to [disable vuetify utilities](https://vuetifyjs.com/en/features/sass-variables/#disabling-utility-classes) to avoid name conflicts.

```bash
npx -y @vuetify/tailwind-migrator --files="src/**"
```

## Example
```vue 
<template>
  <div class="d-none d-xxl-flex"></div>
</template>
```

Becomes

```vue
<template>
  <div class="hidden 2xl:flex"></div>
</template>
```

## Caveats
- Handles only standard Vuetify utilities
- Not all utility classes are included yet
- Does not replace dynamic class constructions (e.g. 'd-' + 'none')

## TODO
- Add all utility classes
- Handle classes inside `<script>` tag
- Handle directives and attributes like `content-class`