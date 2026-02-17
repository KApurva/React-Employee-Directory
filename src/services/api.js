const baseURL = "https://jsonplaceholder.typicode.com"

export const URLS = {
    EMPLOYEES: `${baseURL}/users`,
    EMPLOYEE_DETAILS: (id) => `${baseURL}/users/${id}`
}

export const fetchEmployees = async () => {
    try {
        const res = await fetch(URLS.EMPLOYEES);
        if (!res.ok) throw new Error("Failed to fetch employees")
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err)
        throw err;
    }
}

export const fetchEmployeeDetails = async (id) => {
    try {
        const res = await fetch(URLS.EMPLOYEE_DETAILS(id));
        if (!res.ok) throw new Error("Failed to fetch employee details")
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log(err)
        throw err;
    } 
}