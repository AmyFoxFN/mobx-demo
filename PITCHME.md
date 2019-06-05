# HELLO Mobx

---
## Background
- Tedious message passing in component stack.
- A mechanism makes Test, Redo, Undo easier.

---
## Philosophy
Anything that can be derived from the application state, should be derived. Automatically.

![flow](https://mobx.js.org/docs/flow.png)

---
## Usage
- Define state
- Modify state
- Reaction

---?code=src/stores/basic.js&lang=javascript&color=#1E1F21&title=Basic Usage
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
@[22](execute action)
@[15-22](directly vs action)

---?code=src/stores/reaction.js&lang=javascript&color=#1E1F21&title=Reaction
@[9-11](autorun)
@[13-15](reaction)
@[17-19](observe)

---
## Ecology
- Babel: @babel/plugin-proposal-decorators + @babel/plugin-proposal-class-properties
- React: mobx-react
- Management: mobx-state-tree

---?code=webpack.config.js&lang=javascript&color=#1E1F21&title=Babel Plugin
@[18-25](To support decorator syntax of class property)

---?code=src/app.js&lang=javascript&color=#1E1F21&title=Mobx React - pass in
@[2](pass in as context)
@[17-28](pass in as context)
@[21](pass in as normal prop)

---?code=src/components/basic.js&lang=javascript&color=#1E1F21&title=Mobx React - access
@[2-10](inject and observe)
@[15](access by component.props)

---
## Mobx State Tree
- Immutable Snapshot (Time Traveling, Redo/undo)
- Patch (Redo/undo - Sync with server)
- Middleware

---
## Source Code
- Directory
- Inheritance
- Observable
- Reaction (autorun, reaction, observe).
- Action (Why only one reaction triggered by multi-modifies in an action.?)

---?color=#FAD8DF
## Inheritance
![](assets/image/mobx-inheritance.png)

---
## observable
- Primitive: Object.defineProperty (clue: addObservableProp)
- Object: Proxy (clue: createDynamicObservableObject)

---
## Reaction
- basic: reportChanged + notifyListeners
- autorun: trigger at first time.
- reaction: track expression, don't trigger at first time.
- observe: registerListener

---
## action
- executeAction
- Batch: global lock

---
## Performance
- Execute Time
- Re-render
- Memory

---
## Execute time
- autorun, reaction, observe are almost same.
- 1ms(prepare) + X(execute effect) + 1ms(ending)
- So, I think, mobx maybe not appropriate to track states that changed frequently.

---
## Re-render

---
## Memory

---
## Summary

---
## Future

---
## Thanks for Read
![](assets/image/flower.jpg)
