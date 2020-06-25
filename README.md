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
- `props` inputs from components. You may define type and rules for each prop. This is important to show more details when error throws.
- `components` create tags for import components (remeber to export with default and import with the same name)
- `slots` if you want to add some content inside a component. It is possible to have more than one slot per component, for example, to insert content in locations other than our component. There is a named slot for this. Example: `<slot name="header"></slot>` and at component call `<componente-qualquer><div slot="header">Lorem</componente-qualquer>`. That is not possible to use `v-show` directive at slot.
- `computed` all props needs to be a method. When you call this method, you need to call without the `()` like a prop.

## Style scoped

> Use the tag `scoped` at style tag to close the scope for only the current component and use a global selector to stylized items.

## v-on and v-bind

- `v-on` from template to controller (two-way-data-binding). This directive performs an event association that flows from the view to the controller. Any change to the controller will update the view associated with it, as long as there is an association via v-bind.
- events: ``v-on:input`, `v-on:dblclick`
- You may want to use `@` instead `v-on`, example: `@input`
- the `@` attr to handle with event, you can use the modifier `.native`, example: `@click.native`.

> `:` it is from controller to view and `@` it is from view to controller

The v-bind directive makes an association that flows from the controller to the view. Any change to the controller will cause the view to be updated to represent the new value. The v-on directive performs an event association that flows from the view to the controller. For the changes made by v-on to be updated in the view, it is necessary to combine v-on with v-bind.

## Add and remove classes

- `transition` that is the component to use with the `name` property to add and remove classes basead on some event.

my-class-fade-enter // before the element is added or removed, the current state
my-class-enter-active // when the element is being included
my-class-leave-active // when the element is being removed

## vue-router

- `router-view` indicate to the template of the main page of the application the location where the other components loaded through routes must be rendered.
- to remove `#` at URL, your server must be prepared and at `new VueRouter({})` add the prop `mode: 'history'`.
- use component `router-link` with `to` prop. Like a href in the a tag. But, you can use expressions.
