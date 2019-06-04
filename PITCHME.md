# HELLO Mobx

---
## Background
- Tedious message passing in component stack.
- A mechanism makes Test, Redo, Undo easier.

---
## Philosophy
![flow](https://mobx.js.org/docs/flow.png)

Anything that can be derived from the application state, should be derived. Automatically.

---
## Usage
- Define state
- Modify state
- Derive Reaction

---?code=src/stores/basic.js&lang=javascript&color=#1E1F21
@[3-5](Define state.)
@[13](Modify state.)
@[9-11](Derive Reaction.)

---?code=src/stores/observable.js&lang=javascript&color=#1E1F21
## Usage - Define State
@[4-7](@observable)
@[8-10](@obserable.ref)
@[15-24](@observable vs @observable.ref)

---?code=src/stores/action.js&lang=javascript&color=#1E1F21
## Usage - Modify State
@[19-20](write directly)
@[6-10](define action to write state)
@[22](execute actio )
@[15-22](directly vs action)

---
## Usage - Reaction

---
## Usage - with React

---
## Source Code

---
## Source - observable

---
## Source - Reaction

---
## Source - action

---
## Performance

---
## Performance - execute time

---
## Performance - re-render

---
## Performance - memory

---
## Summary

---
## Future

---
## Thanks for Read
![](pitch-assets/image/flower.jpg)
