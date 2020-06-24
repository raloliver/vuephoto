# vuephoto

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Lifecycle hooks

> These are functions of our components that are called at different stages in the life cycle of a component, that is, from its creation to its destruction.

- `created(){}` logic this is call when the component are created.
- `props` inputs from components
- `components` create tags for import components (remeber to export with default and import with the same name)
- `slots` if you want to add some content inside a component. It is possible to have more than one slot per component, for example, to insert content in locations other than our component. There is a named slot for this. Example: `<slot name="header"></slot>` and at component call `<componente-qualquer><div slot="header">Lorem</componente-qualquer>`.
- `computed` all props needs to be a method. When you call this method, you need to call without the `()` like a prop.

## Style scoped

> Use the tag `scoped` at style tag to close the scope for only the current component and use a global selector to stylized items.

## v-on and v-bind

- `v-on` from template to controller (two-way-data-binding). This directive performs an event association that flows from the view to the data source. Any change to the data source will update the view associated with it, as long as there is an association via v-bind.

The v-bind directive makes an association that flows from the data source to the view. Any change to the data source will cause the view to be updated to represent the new value. The v-on directive performs an event association that flows from the view to the data source. For the changes made by v-on to be updated in the view, it is necessary to combine v-on with v-bind.
