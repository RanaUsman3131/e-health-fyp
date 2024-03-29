import instance from "./axiosConfig";

export async function roles() {
  let { data } = await instance.get("/auth/roles");
  return data;
}

export async function login({ email, password }) {
  return await instance.post("/auth/login", { email, password });
}
export async function register({ name, email, password, role_id }) {
  return await instance.post("/auth/register", {
    name,
    email,
    password,
    role_id,
  });
}
export async function getDoc(_id) {
  return await instance.get("/doctors?dep_id=" + `${_id}`);
}

export async function getDepartment() {
  return await instance.get("/departments");
}

export async function getDocId(id) {
  return await instance.get("/doctors", { id: id });
}

export async function createApp(data) {
  return await instance.post("/appointment", {
    ...data,
    patient_id: JSON.parse(localStorage.getItem("user_auth"))?.user._id,
  });
}
export async function addDepartmentToDoc(data) {
  return await instance.post("/doctor-department", {
    department_id: data,
    doctor_id: JSON.parse(localStorage.getItem("user_auth"))?.user._id,
  });
}

export async function getYourDepartment() {
  return await instance.get(
    `/get-your-department/${
      JSON.parse(localStorage.getItem("user_auth"))?.user._id
    }`
  );
}
export async function getAppointment(id) {
  let { data } = await instance.get(`/appointment/${id}`);
  return data;
}

export async function getYourAppointment(id) {
  return await instance.get(
    `/get-your-appointments/${
      JSON.parse(localStorage.getItem("user_auth"))?.user._id
    }`
  );
}

export async function getAppointmentsTow(id) {
  let { data } = await instance.get(`/appointments/${id}`);
  return data;
}
export async function getYourPatients(id) {
  let { data } = await instance.get(`/get-your-patient/${id}`);
  return data;
}

export async function getPatients() {
  return await instance.get(`/patients`);
}
export async function getDoctors(id) {
  return await instance.get(`/appointments/${id}`);
}
// //////////////////////
export async function LLCManagement() {
  let { data } = await instance.get("/llc_managements");
  return data;
}

export async function taxTypes() {
  let { data } = await instance.get("/taxes");
  return data;
}

export async function operationTypes() {
  let { data } = await instance.get("/operations");
  return data;
}

export async function services() {
  let { data } = await instance.get("/services");
  return data;
}

export async function DHWCSpecialist() {
  let { data } = await instance.get("/dhwc_specialists");
  return data;
}

export async function countries() {
  let { data } = await instance.get("/countries");
  return data;
}

export async function statesByCountryId({ queryKey: [_, _data] }) {
  let { data } = await instance.get(`/states?country_id=${_data.countryId}`);
  return data;
}
export async function updateAppointment(_data) {
  let { data } = await instance.post(`/appointment-update`, _data);
  return data;
}


export async function createClient(_data) {
  let { data } = await instance.post(`/clients`, _data);
  return data;
}


export async function getClients() {
  let { data } = await instance.get(`/clients`);
  return data;
}

export async function getContactTypes() {
  let { data } = await instance.get(`/contact_types`);
  return data;
}

export async function getSal() {
  let { data } = await instance.get(`/sals`);
  return data;
}

export async function maritalStatus() {
  let { data } = await instance.get(`/marital_status`);
  return data;
}

export async function createContact(_data) {
  let { data } = await instance.post(`/contacts`, _data);
  return data;
}

export async function getContacts() {
  let { data } = await instance.get(`/contacts`);
  return data;
}

export async function getContactById(_id) {
  let { data } = await instance.get(`/contacts/${_id}`);
  return data;
}

export async function getContactAddressesById(_id) {
  let { data } = await instance.get(`/contacts/${_id}/addresses`);
  return data;
}

export async function createContactAddress(_data) {
  let { data } = await instance.post(`/addresses`, _data);
  return data;
}
export async function updateContactAddress(_data) {
  let { data } = await instance.put(`/addresses/${_data._id}`, _data);
  return data;
}

export async function updateContactEmployment(_data) {
  let { data } = await instance.put(`/employments/${_data._id}`, _data);
  return data;
}

export async function createContactEmployment(_data) {
  let { data } = await instance.post(`/employments`, _data);
  return data;
}

export async function getContactEmploymentById(_id) {
  let { data } = await instance.get(`/contacts/${_id}/employments`);

  return data;
}

export async function removeAddress(_id) {
  let { data } = await instance.delete(`/addresses/${_id}`);
  return data;
}

export async function removeEmployment(_id) {
  let { data } = await instance.delete(`/employments/${_id}`);
  return data;
}
