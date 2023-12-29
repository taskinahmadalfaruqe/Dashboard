import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DisplayCard = ({ singleCard }) => {
  return (
    <div className="bg-white  p-5 rounded-md text-center">
      <div
        className="h-[180px] rounded-md flex justify-center items-center"
      >
        <img src={singleCard.download_url} alt="createAssignment" className="rounded-md w-full h-full" />
      </div>
      <div className="mt-[10px]">
        <p className="font-bold">Create a new project</p>
        <p>
          or try a{" "}
          <span className="text-[#FA782F]">
            <Link>simple project</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

DisplayCard.propTypes = {
  singleCard: PropTypes.object.isRequired,
};

export default DisplayCard;
