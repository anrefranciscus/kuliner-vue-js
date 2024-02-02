import axios from "axios";
import Lazy from "@/plugins/Lazy";
import FoodNetworkRepositoryStructResponse from "@/repositories/network/FoodNetworkRepositoryStructResponse";

const getAllProduct = async () => {
    const url = `http://localhost:4000/api/food/get-all`
    const response = await axios.get(url)
    if (response.status === 200) {
        let newData = []
        for (const item of response.data.data) {
            newData.push(await Lazy.transform(
                item,
                new FoodNetworkRepositoryStructResponse()
            ))
        }
        response.data = newData
    }
    return response
}






const FoodNetworkRepository = {
    getAllProduct
}
export default FoodNetworkRepository
