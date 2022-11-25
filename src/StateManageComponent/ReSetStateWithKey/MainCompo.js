import React,{ useState } from 'react';
import Field from './SubChildCom'
export default function MyReverse() {


// Remember that keys are not globally unique. They only specify the position within the parent.

//                             Note
// There are two ways to reset state when switching between them:

//   1. Render components in different positions.
//   2. Give each component an explicit identity with key.


//    Resetting state with a key   example ------

//  Keys aren’t just for lists! You can use keys to make React distinguish between any components.
//  By default, React uses order within the parent (“first counter”, “second counter”)
//  to discern between components. But keys let you tell React that this is not just a first counter,
//  or a second counter, but a specific counter.
// for example, Taylor’s counter. This way, React will know Taylor’s counter wherever 
// it appears in the tree!

// {isPlayerA ? (
//     <Counter key="Taylor" person="Taylor" />
//   ) : (
//     <Counter key="Sarah" person="Sarah" />
//   )}

// In above example, the two <Counter />s don’t share state 
// even though they appear in the same place in JSX:

//                   NOTE   
// Switching between Taylor and Sarah does not preserve the state. 
// This is because you gave them different keys:


// Specifying a key tells React to use the key itself as part of the position,
// instead of their order within the parent. This is why, even though you render them in the same place
// in JSX, from React’s perspective, these are two different counters. As a result, 
// they will never share state. Every time a counter appears on the screen, its state is created. 
// Every time it is removed, its state is destroyed.
// Toggling between them resets their state over and over.


//         Challenge   About this  Example    -

// This form lets you enter first and last name. 
// It also has a checkbox controlling which field goes first. 
// When you tick the checkbox, the “Last name” field will appear before the “First name” field.

// It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox, 
// the text will stay in the first input (which is now “Last name”).
// Fix it so that the input text also moves when you reverse the order.



//   Solution -

// Give a key to both <Field> components in both if and else branches. 
// This tells React how to “match up” the correct state for either <Field> 
// even if their order within the parent changes:


  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key='lastName' label="Last name" /> 
        <Field key='firstName' label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key='firstName' label="First name" /> 
        <Field key='lastName' label="Last name" />
        {checkbox}
      </>
    );    
  }
}
