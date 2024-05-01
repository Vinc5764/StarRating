import { useState } from "react";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={3}
      />
      <StarRating size={24} color="red" className="test" defaultRating={1} />
      <Test />
    </div>
  );
};

export default App;
