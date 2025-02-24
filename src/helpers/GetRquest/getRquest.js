import axios from "axios";
import { API_URL, API_URL_mdmcourse, API_URL_mdmentity, API_URL_mdmtaskman, Scalefusion_ACCESS_TOKEN, scalefusion_API_URL } from "../config";

let token = JSON.parse(localStorage.getItem("token"));


export const GetAllUsers = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Administrator/GetAllUsers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetRoles = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Administrator/GetRoles`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}


export const addRoles = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Administrator/addRoles`, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

// export const DeviceConnectionStatus = async (params) => {

//     try {
//         const res = await axios.get(`${API_URL}/api/v1/devices/connection_status`, {
//             params: { params },
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`,
//             }
//         });
//         return res?.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

export const DeviceId = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/DeviceEnrollment/id?id=${id}`, {
            // params: { id },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeviceLocationById = async (device_id) => {

    try {
        const res = await axios.get(`${scalefusion_API_URL}/api/v1/devices/${device_id}/locations`, {
            // params: { params },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${Scalefusion_ACCESS_TOKEN}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeviceApplications = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Device/${params}/applications`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeviceList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/DeviceEnrollment/getallandroiddevice`, {
            params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}


export const GetTimetable = async (courseId) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Timetable/GetFilteredTimetable`, {
            params: courseId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}


export const GroupMembers = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/MdmgroupMember/getAll`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const LeaveApplication = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/LeaveApplication`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetAllProjectList = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Project/getAll`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllProject = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Project/assignedBy/${id}`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllGroup = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Mdmgroup/getAll`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

// LeaveApplication
export const GetHoliday = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Holiday`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetEvents = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/Calender/GetAllEvents`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetMdmTask = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/MdmTask`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetMdmTaskFile = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/Mdmfile`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetSchoolHourDetail = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/SchoolHourDetail`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const getSchoolHourDetail = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/SchoolHourDetail/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetCourse = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Course`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetSystemPolicy = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Policy/systempolicies`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAndroidPolicies = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Policy/androidpolicies`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetExam = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Exam`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetExamType = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/ExamType`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetCycle = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Cycle`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetCourseById = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Course/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetCategory = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Category`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetVendorCategory = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/VendorCategory`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllVendors = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Vendor/GetAll`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}


export const GetSubject = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Subject`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetTerm = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Term`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetCourseByCycle = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/CourseByCycle`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetFee = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Fee`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetFeeType = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/FeeType`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetStudentDailySchedule = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/StudentDailySchedule`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetStudentDailyScheduleById = async (id) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/StudentDailySchedule/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetTaskType = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmtaskman}/api/TaskType`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetStudentList = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmentity}/api/studentController`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetTeacherList = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmentity}/api/Teacher`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetNotificationList = async (params) => {

    try {
        const res = await axios.get(`${API_URL_mdmcourse}/api/Notification`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetOrganisationList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Organisation`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetOrganisationAdminList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Administrator/organisation-details`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllAssetList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/Asset/GettAllAsset`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAssetAssignmentList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/AssetAssignment`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllCategoryList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/AssetCategory/GetAllCategory`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetAssetMaintenanceScheduleList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/AssetMaintenanceSchedule`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetOrganisationAssociateList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/OrganisationAssociate`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetWiFiSettingList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/WiFiSetting`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetWiFiSettingById = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/WiFiSetting/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetOrganisationById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/Organisation/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAssetById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/Asset/id?id=${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetAssetCategoryById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/AssetCategory/id?id=${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAssetMaintenanceScheduleById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/AssetMaintenanceSchedule/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetOrganisationAssociateById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/OrganisationAssociate/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const DeleteQuizQuestionById = async (id) => {
    try {
        const res = await axios.get(`${API_URL}/api/QuizQuestion/Delete/${id}`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetInstalledApplicationList = async (params) => {

    try {
        const res = await axios.get(`${API_URL}/api/v2/devices/device_apps/installed_apps.json`, {
            // params: params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetQuizQuestionList = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/QuizQuestion/GetAll`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetQuizzesTypeList = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Quizzes`, {
            // params:params,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GetAndroidEnrollmentQR = async (id,organisationid) => {

    try {
        const res = await axios.get(`${API_URL}/api/DeviceEnrollment/GetAndroidEnrollmentQR?id=${id}&organisationid=${organisationid}`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const DoneAndroidEnrollment = async (id,organisationid,enrollmenttoken) => {

    try {
        const res = await axios.get(`${API_URL}/api/DeviceEnrollment/DoneAndroidEnrollment?id=${id}&organisationid=${organisationid}&enrollmenttoken=${enrollmenttoken}`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetProjectById = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Project/getById/${id}`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GroupGetById = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Mdmgroup/getById/${id}`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}

export const GroupMembersGetById = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/MdmgroupMember/getById/${id}`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}
export const GetAllRemainders = async (id) => {

    try {
        const res = await axios.get(`${API_URL}/api/Reminder/get-all-unique-reminders`, {
            // params: id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        return res?.data;
    } catch (error) {
        console.log(error);
    }
}