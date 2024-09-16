import mongoose from 'mongoose'

    const paymentSetting = new mongoose.Schema({
        storeID:String,
        store_password:String,
        currency:String,
        success_url:String,
        fail_url:String,
        cancel_url:String,
        ipn_url:String,
        init_url:String,
    },{timestamps:true, versionKey:false}
    )

const paymentModel = mongoose.model('Payment',paymentSetting);
export default paymentModel;