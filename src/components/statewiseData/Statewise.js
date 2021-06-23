import React, { useState, useEffect } from "react";

const Statewise = () => {
  const [sdata, setData] = useState([]);
  const getCovidData = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const data = await response.json();
    console.log(data);
    setData(data.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center"><span>India</span> Covid19-Dashboard</h1>
        <div className="table-responsive">
          <table className="text-center table table-hover  mt-4">
            <thead>
              <tr>
                <th>State</th>
                <th>Active</th>
                <th>Confirmed</th>
                <th>Deaths</th>
              </tr>
            </thead>
            {sdata.map((elem,indx) => {
              return (
                <>
                  <tbody key={indx}>
                    <td>{elem.state}</td>
                    <td>{elem.active}</td>
                    <td>{elem.confirmed}</td>
                    <td>{elem.deaths}</td>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Statewise;
