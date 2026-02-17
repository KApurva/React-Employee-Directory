import { useEffect, useState } from "react";
import { fetchEmployeeDetails } from "../../services/api";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getEmployeeDetails = async () => {
            const res = await fetchEmployeeDetails(id)
            setEmployee(res)
        }
        if (id) getEmployeeDetails()
    }, [id])

    return (
        <div className="flex justify-center">
            <div className="border rounded-md w-80 self-center pb-5 m-5">
                {/* <h1 className="text-2xl">Employee Details</h1> */}
                <p className="text-2xl px-5 py-4 border-b-2">{employee?.name}</p>
                <p className="px-5 pt-4 p-1">{employee?.username}</p>
                <p className="px-5 p-1">{employee?.email}</p>
                <p className="px-5 p-1">{employee?.phone}</p>
            </div>
        </div>
    )
}

export default EmployeeDetails;