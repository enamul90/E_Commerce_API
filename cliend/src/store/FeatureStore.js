
import {create} from "zustand"
import axios from "axios"
let url = "http://localhost:3001/api/FeaturesList"
let legalApi = "http://localhost:3001/api/LegalDetail/"

const FeatureStore = create((set)=>({
    FeatureList: null,
    FeatureStoreListRequest: async ()=>{
        let res = await axios.get(url)
        if(res.data['status'] === "success"){
            set({ FeatureList: res.data['data']})
        }

    },
    LegalData: null,
    legalDataRequest: async (a)=>{
        let res = await axios.get(legalApi + a)
        if(res.data['status'] === "success"){
            set({ LegalData: res.data['data']})
        }
    }


}))

export default FeatureStore;