import { useEffect, useState } from 'react';
import { fetchEmployees } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
    const headers = ["ID", "Name", "UserName", "Email"]
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getEmployees = async () => {
            const res = await fetchEmployees()
            setEmployees(res)
        }
        getEmployees();
    }, [])

    return (
        <div>
            <h1 className='text-2xl'>Employee List</h1>

            <table className='table-auto w-full border border-gray-300 text-left  my-4'>
                <thead className='bg-gray-200'>
                    <tr>
                        {headers.map(h =>
                            <th className='border py-4'>{h}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e =>
                        <tr key={e.id}
                            className='cursor hover:bg-gray-100 cursor-pointer'
                            onClick={() => navigate(`/employee/${e.id}`)} >
                            <td className='border py-2'>{e.id}</td>
                            <td className='border py-2'>{e.name}</td>
                            <td className='border py-2'>{e.username}</td>
                            <td className='border py-2'>{e.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;