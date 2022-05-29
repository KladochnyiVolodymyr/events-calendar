import { useDispatch } from "react-redux";
import { filterEvents } from "../redux/actions/filterActions";

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h5>Filters</h5>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(filterEvents("meeting"))}
        >
          Meeting with an expert
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(filterEvents("question/answer"))}
        >
          Question/Answer
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(filterEvents("conference"))}
        >
          Conference
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => dispatch(filterEvents("webinar"))}
        >
          Webinar
        </button>
      </div>
    </div>
  );
};

export default Filters;
