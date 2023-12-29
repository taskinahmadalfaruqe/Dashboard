import { Link } from "react-router-dom";
import assgnmentcreate from "../assets/createproject.png";

const CreateAProject = () => {
  return (
    <div className="bg-white  p-5 rounded-md text-center">
      <div
        className="h-[180px] rounded-md flex justify-center items-center"
        style={{ background: "rgba(250,120,47,.4)" }}
      >
        <img src={assgnmentcreate} alt="createAssignment" />
      </div>
      <div className="mt-[10px]">
        <p className="font-bold">Create a new project</p>
        <p>
          or try a{" "}
          <span className="text-[#FA782F]">
            <Link >simple project</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateAProject;
