# Vue deepUnref

The counterpart to Vue 3's [toRefs](https://v3.vuejs.org/api/refs-api.html#torefs), `deepUnref` will apply `unref` recursively until you have an object or array that is completely free of refs.  Useful for when you need to pass, for example, a "form" object full of refs to a validation library or to a POST endpoint.

## Installation

`yarn add vue-deepunref`
`npm install vue-deepunref`

## Usage

```javascript
import { deepUnref } from 'vue-deepunref';

const form = {
  name: ref('Abc Def'),
  email: ref('abc@def.com'),
}

saveRest({ ...deepUnref(form) });
```