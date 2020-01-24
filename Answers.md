1. What problem does the context API help solve?

Context API helps solve the problem with prop drilling, by only having the components that need to have that piece of state, have access to it through the context provider.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store in redux is the central location of where state is stored. Actions are things your app is going to do like fetch data. Reducers handle the actions and set the state to the store.
The store is known of the single source of truth because it controls your componets and it is the only way to change and update state to those componnets.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state managed for the whole App. While component state only controls state for that component. Application state is used when more than 1 component needs access to the state,
and using component state would be a good time to use it for forms since it doesn't affect the overall state to the application but that state can be sent over to use it in the rest of the app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to make our action creators asychronous in order to make our API calls.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system is Context API because it is a lot simpler to setup and use. Unlike redux where it takes a lot of time to setup and might not be worth it
for a small application.