import React, { useState } from "react";
import ChildsOne from "./ChildOne";
import ChildsTwo from "./ChildTwo";
import "../../App.css";;
const Parent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Here we are sharing a single  state between two component.
  return (
    <div className="App">
      <ChildsOne
        title="About"
        isActive={activeIndex === 0}
        onShows={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </ChildsOne>

      <ChildsTwo
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </ChildsTwo>
    </div>
  );
};
export default Parent;
