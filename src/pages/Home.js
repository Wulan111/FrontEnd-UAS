import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get('http://localhost:3006/visitors')
      .then(response => {
        const productsData = response.data;
        setData(productsData);
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
      });
  }

  useEffect(() => {
    
    
    getData();
    
  }, []);

  function deleteUser(id) {
    axios.delete(`http://localhost:3006/visitors/${id}`).then(getData());
  }

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold" style={{ color: '#682f01' }}>Visitor List</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-yellow-400">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        No
                      </th>
                      <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                        Phone Number
                      </th>
                      <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                        Option
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {data.map((item, index) => (
                      <tr key={index} className="bg-white border-b-2 border-black">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {item.phoneNumber}
                        </td>
                        <td className="text-sm flex justify-between items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${item._id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Lihat
                          </Link>
                          <Link
                            to={`/edit-user/${item._id}`}
                            className="bg-green-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={() => deleteUser(item._id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to="/add-user"
              className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" 
              style={{ backgroundColor: 'orange', color: 'white' }}>
              Add Visitor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
