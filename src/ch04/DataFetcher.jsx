import { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";


const DataFetcher = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos//0`
        );
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("No data available");
      }
    };
    setTimeout(fetchData, 3000);
  }, []);
  return data ? <div>{JSON.stringify(data)}</div> : <h1><FiLoader /></h1>;
};

export default DataFetcher;
