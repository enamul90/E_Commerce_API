
import {create} from "zustand"
import axios from "axios"
let url = "http://localhost:3001/api/FeaturesList"

const FeatureStore = create((set)=>({
    FeatureList: null,
    FeatureStoreListRequest: async ()=>{
        let res = await axios.get(url)
        if(res.data['status'] === "success"){
            set({ FeatureList: res.data['data']})
        }

    }


}))

export default FeatureStore;