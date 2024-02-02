import FoodNetworkRepository from "@/repositories/network/FoodNetworkRepository";

const get = async () => {
    return FoodNetworkRepository.getAllProduct()
}

const FoodService  = {
    get
}

export default FoodService
