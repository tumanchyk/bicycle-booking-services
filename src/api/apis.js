import axios from "./baseUrl";

export const getAllBicycles = async () => {
    try {
        const response = await axios.get("/bicycles");
        return response.data;
    } catch (error) {
        console.error("Error fetching bicycles:", error);
    }
}
export const createBicycle = async (data) => {
    try {
        const response = await axios.post("/bicycles", data);
        return response.data;
    } catch (error) {
        console.error("Error fetching bicycles:", error);
    }
}
export const deleteBicycle = async (id) => {
    try {
        const response = await axios.delete(`/bicycles/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bicycles:", error);
    }
}
export const updateBicycleStatus = async (id, status) => {
    try {
        const response = await axios.put(`/bicycles/${id}`, { status });
        return response.data;
    } catch (error) {
        console.error("Error fetching bicycles:", error);
    }
}
export const getStatistic = async () => {
    try {
        const response = await axios.get("/statistic");
        return response.data;
    } catch (error) {
        console.error("Error fetching statistic:", error);
    }
}