import axios from "axios";

export const findAll = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080`)
        return rs.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllByPage = async (page) => {
    try {
        let rs = await axios.get(`http://localhost:8080/getList?page=${page}`)
        return rs.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        let rs = await axios.get(`http://localhost:8080/type`)
        return rs.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (customer) => {
    console.log(customer)
    try {
        await axios.post(`http://localhost:8080/add`, customer)
    } catch (e) {
        console.log(e)
    }
}
export const saveAll = async (customerList) => {
    try {
        await axios.post(`http://localhost:8080/saveAll`, customerList)
    } catch (e) {
        console.log(e)
    }
}
export const searchName = async (name) => {
    try {
        let rs = await axios.get(`http://localhost:8080/search?name=${name}`)
        return rs.data.content
    } catch (e) {
        console.log(e)
    }
}
export const findCustomerById = async (id) => {
    try {
      return  (await axios.get(`http://localhost:8080/customer-detail/${id}`)).data

    } catch (e) {
        console.log(e)
    }
}