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
- Reaction

---?code=src/stores/basic.js&lang=javascript&color=#1E1F21
@[3-5](Define state.)
@[13](Modify state.)
@[9-11](Reaction.)

---?code=src/stores/observable.js&lang=javascript&color=#1E1F21&title=Define State
@[4-7](@observable)
@[8-10](@obserable.ref)
@[15-24](@observable vs @observable.ref)

---?code=src/stores/action.js&lang=javascript&color=#1E1F21&title=Modify State
@[19-20](modify directly)
@[6-10](define action to modify state)
@[22](execute action )
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
