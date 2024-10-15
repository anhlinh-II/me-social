import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestApi: React.FC = () => {
     const [apiData, setData] = useState<any>(null);
     const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhaGFoYWhhQGdtYWlsLmNvbSIsInBlcm1pc3Npb24iOlsiUk9MRV9VU0VSX0NSRUFURSIsIlJPTEVfVVNFUl9VUERBVEUiXSwiZXhwIjoxNzI5MDQ3MTEwLCJpYXQiOjE3Mjg5NjA3MTAsInVzZXIiOnsiaWQiOjUsImVtYWlsIjoiYWhhaGFoYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFETUlOIiwibG9jYXRpb24iOm51bGx9fQ.oFfaz79nR3cXOevMDZllVNtpuUY1pdh_pyNmR59NyM8U1KoIhIWYqsB1Ty9tYfp4xTKlwxkKK2pfOjqhTGw4eQ"; 
                
     useEffect(() => {
          axios.get('http://localhost:8080/api/users', {
               headers: {
                    Authorization: `Bearer ${token}`
                }
          })
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
