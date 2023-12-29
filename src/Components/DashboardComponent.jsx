import { useEffect, useState } from "react";
import CreateAProject from "./CreateAProject";
import DisplayCard from "./DisplayCard";

const DashboardComponent = () => {
  const [fetchData, setFetchedData] = useState([]);
  useEffect(() => {
    const alldata = async () => {
      const cardData = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=6"
      );
      const data = await cardData.json();
      setFetchedData(data);
    };
    alldata();
  }, []);
  return (
    <div>
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-5">
          <div className="text-4xl font-bold">My Project</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fetchData.map((singleCard) => (
              <DisplayCard
                key={singleCard.id}
                singleCard={singleCard}
              ></DisplayCard>
            ))}
            <CreateAProject></CreateAProject>
          </div>
        </div>
    </div>
  );
};

export default DashboardComponent;
