import instance from "./instance.js"

instance

const deleteCard = async ()=>{
    const result = await instance.delete(`/${this._id}`)
    console.log(result)
}

export default deleteCard