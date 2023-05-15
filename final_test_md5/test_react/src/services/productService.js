import axios from "axios";

export const findAll = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/product?_sort=quantity&_order=esc`)
        return response;
    } catch (error) {
        console.log(error)
    }
}
export const typeProduct = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/typeProduct`)
        return response;
    } catch (error) {
        console.log(error)

    }
}
export const findByNameAndType = async (name, type) => {
    try {
        const response = await axios.get(`http://localhost:8080/product?name_like=${name}&typeProduct_like=${type}`)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const save = async (product) => {
    try {
        return await axios.post(`http://localhost:8080/product`, {...product})
    } catch (error) {
        console.log(error)

    }
}
export const remove=async (id)=>{
    try {
        const response=await axios.delete(`http://localhost:8080/product/${id}`)
        return response
    }catch (error) {
        console.log(error)
    }
}
export const findById = (id)=>{
    try {
        return axios.get(`http://localhost:8080/product/detail?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const edit = (product)=>{
    try {
        axios.put(`http://localhost:8080/product/${product.id}`)
    } catch (error) {
        console.log(error);
    }
}