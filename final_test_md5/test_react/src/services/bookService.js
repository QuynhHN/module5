import axios from "axios";

export const findAll = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/books`)
        return response
    } catch (error) {
        console.log(error)

    }
}
export const bookType = async () => {
    try {
        const response = await axios.get(`http://localhost:8080/bookType`)
        return response
    } catch (error) {
        console.log(error)
    }
}
export const save = async (book) => {
    try {
       return await axios.post(`http://localhost:8080/books`, {...book})
    } catch (error) {
        console.log(error)

    }
}
export const findByNameAndType=async(name,typeId) =>{
    try {
        const response=await axios.get(`http://localhost:8080/books?name_like=${name}&bookType_like=${typeId}`)
        return response
    }catch (error) {
        console.log(error)

    }
}
export const remove=async (id)=>{
    try {
        const response=await axios.delete(`http://localhost:8080/books/${id}`)
        return response
    }catch (error) {
        console.log(error)

    }
}