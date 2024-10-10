import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestApi: React.FC = () => {
     const [apiData, setData] = useState<any>(null);

     useEffect(() => {
          axios.get('http://localhost:8080/api/users')
               .then(response => setData(response.data))
               .catch(error => console.error('Error fetching data:', error));
     }, []);

     console.log("data >> ", apiData);
     return (
          <div className='border-2 border-red-600 p-4'>
               <h1>Spring Boot and React Integration</h1>
               <ul>
                    {/* Kiểm tra apiData và map qua mảng content */}
                    {apiData?.result?.content?.map((user: any) => (
                         <li key={user.id}>
                              {user.lastName}
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default TestApi;
