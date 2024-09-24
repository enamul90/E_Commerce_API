import mongoose from 'mongoose'

    const paymentSetting = new mongoose.Schema({
        store_id:String,
        store_passwd:String,
        currency:String,
        success_url:String,
        fail_url:String,
        cancel_url:String,
        ipn_url:String,
        init_url:String,
    },{timestamps:true, versionKey:false}
    )

const paymentModel = mongoose.model('Payment_Setting',paymentSetting);
export default paymentModel;