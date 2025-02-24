import axios from "axios";
import { API_URL } from "../config";



// let  token = localStorage.setItem("accessToken", access);
let accessToken = JSON.parse(localStorage.getItem("token"));



export const AddRegister = async (data) => {
    try {

        const res = await axios.post(`${API_URL}/api/userRegistration`, data, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            }
        });

        // Return the response data
        return res.data;
    } catch (error) {
        // Log the error for debugging
        console.error("Error in AddRegisterCustomer:", error.response ? error.response.data : error.message);
        // Optionally, rethrow the error if you want to handle it elsewhere
        throw error;
    }
};
export const userLogin = async (data) => {
    try {

        const res = await axios.post(`${API_URL}/api/userLogin`, data, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            }
        });

        // Return the response data
        return res.data;
    } catch (error) {
        // Log the error for debugging
        console.error("Error in AddRegisterCustomer:", error.response ? error.response.data : error.message);
        // Optionally, rethrow the error if you want to handle it elsewhere
        throw error;
    }
};
