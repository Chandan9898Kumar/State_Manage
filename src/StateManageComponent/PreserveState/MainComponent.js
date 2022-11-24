/* eslint-disable no-lone-blocks */

import React, { useState } from "react";
import ChildHeader from "./ChildComponent";

const MainHeader = () => {
  const [showB, setShowB] = useState(true);

  // Here we have used same component two times.working as separate component.
  // Changing state of one component will not affect other.

  //These are two separate ChildHeader componenet because each is rendered at its own position in the tree.

  // each component on the screen has fully isolated state. For example,
  // if you render two ChildHeader components side by side, each of them will get its own,
  // independent, score and hover states.

  //  Different components at the same position reset state ex: <CounterOne>(different) with a <p> (different)

  // <div>
  // {showB ? (
  // <CounterOne  />
  // ) : (
  //   <p>See you later!</p>
  // )}
  // </div>

  // Above, you switch between different component types at the same position. Initially,
  // the first child of the <div> contained a CounterOne. But when you swapped in a  <p> component,
  // React removed the CounterOne from the UI tree and destroyed its state.

  //  Below Same components at the different position reset state.
  return (
    <div style={{float:'left'}}>
      <ChildHeader />
      {showB ? <ChildHeader /> : ""}
      
      <br />
      <br />

      {/* React will keep the state around for as long as you render 
the same component at the same position. To see this, 
increment both counters, then remove the second component by unchecking “Render
the second counter” checkbox, and then add it back by ticking it again: */}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => setShowB(!showB)}
        />
        
        {showB ? 'Remove the second component': 'Render the second component'}
      </label>

      {/* 
Notice how the moment you stop rendering the second componenet, 
its state disappears completely. That’s because when React removes a component,
it destroys its state.

When you tick “Render the second counter”, a second Counter and its state 
are initialized from scratch (score = 0) and added to the DOM.

                                    Note

React preserves a component’s state for as long as it’s being rendered at 
its position in the UI tree. If it gets removed, or a different component 
gets rendered at the same position, React discards its state.

 */}
    </div>
  );
};

export default MainHeader;

//                                 Note:
//  By doing like this : -

// Same component at the same position preserves state- state will not change.
// incremented value remains as it is.

// In this example, there are two different <ChildHeader /> tags:

// Bewlow same components at the same position preserves state (state value does not reset itself).
// {
//   showB ?   <ChildHeader /> :  <ChildHeader />
// }

// When you tick or clear the checkbox, the ChildHeader componenet's state does not get reset.
// Whether showB  is true or false, you always have a <ChildHeader />
// as the first child of the div returned from the root App component:

//  It’s the same component at the same position, so from React’s perspective, it’s the same ChildHeader Componenet.

//                                   Note : below
// here <Counter isFancy={true} />  is  inside <div>  is different component and <Counter isFancy={false} /> which is
// inside <section> is different componenet. so we are calling it different component at same place because they are
// inside outer <div> .

// The counter state gets reset when you click the checkbox. Although you render a Counter component,
// the first child of the div changes from a div to a section.
// When the child div was removed from the DOM, the whole tree below it
// (including the Counter component and its state) was destroyed as well.
{
  /*
   <div>

      {showB ? (
        <div>
          <Counter isFancy={true} /> 
        </div>
      ) : (
        <section>
          <Counter isFancy={false} />
        </section>
      )}

</div>
 */
}

///            But if we do like this -
// Bewlow same components at the same position preserves state (state value does not reset itself).
// inside a <div> . they are not in other component like ablove ,so considered as same component.
{
  /*

<div> 
  showB ?   <ChildHeader /> :  <ChildHeader />
 </div>

*/
}
