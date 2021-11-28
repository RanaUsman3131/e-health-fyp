import instance from "./axiosConfig";

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