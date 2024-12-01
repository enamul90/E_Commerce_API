import ProductStore from "../../store/ProductStore.js";
import {useEffect, useState} from "react";

const ProductFilter = () => {

    const {BrandList, BrandStoreListRequest, CategoryList, CategoryListRequest, productFilterRequest} = ProductStore()
    let [ReqBody, setReqBody] = useState({brandID:"", categoryID:"", priceMax:"", priceMin:""})

    const inputOnChange=async (name,value)=>{
        setReqBody((data)=>({
            ...data,
            [name]:value
        }))
    }

    // useEffect(()=>{
    //     (
    //         async ()=>{
    //             if(BrandList === null){
    //                 await BrandStoreListRequest();
    //             }
    //             if( CategoryList === null){
    //                 await CategoryListRequest();
    //             }
    //
    //             await productFilterRequest(ReqBody);
    //         }
    //     )()
    //
    // }, [ReqBody])

    useEffect(() => {
        (async ()=>{
            BrandList===null?await BrandStoreListRequest():null;
            CategoryList===null?await CategoryListRequest():null;
            let isEveryFilterPropertyEmpty=Object.values(ReqBody).every(value => value==="");
            !isEveryFilterPropertyEmpty?await productFilterRequest(ReqBody):null
        })()
    }, [ReqBody]);


    return (
        <div className="container px-3 mt-3 bg-white min-vh-100 rounded shadow-sm border">
            <label className="mt-4"> Select Brand</label>
            <select
                value={ReqBody.brandID}
                onChange={(e)=>inputOnChange("brandID",e.target.value)}
                className="form-select mt-2" aria-label="Default select example">
                <option value={""} selected="">Select Brand</option>
                {
                    BrandList? BrandList.map((item, i)=>{
                        return <option key={i} value={item._id}>{item['brandName']}</option>

                    }): null
                }

            </select>

            <label className="mt-3"> Select Category</label>
            <select
                value={ReqBody.categoryID}
                onChange={(e)=>inputOnChange("categoryID",e.target.value)}
                className="form-select mt-2" aria-label="Default select example">
                <option value={""} selected="">Select Category</option>
                {
                    CategoryList? CategoryList.map((item, i)=>{
                        return <option key={i} value={item._id}>{item['categoryName']}</option>
                    }): null
                }
            </select>

            <label className="mt-4">Maximum Price $ {ReqBody.priceMax}</label>
            <input
                value={ReqBody.priceMax}
                onChange={(e)=>inputOnChange("priceMax",e.target.value)}
                min={1} max={100000}
                type="range"  className="form-range mt-1"/>

            <label className="mt-1">Minimum Price $ {ReqBody.priceMin}</label>
            <input
                value={ReqBody.priceMin}
                onChange={(e)=>inputOnChange("priceMin",e.target.value)}
                min={1} max={100000}
                type="range" className="form-range mt-1"/>


        </div>
    );
};

export default ProductFilter;