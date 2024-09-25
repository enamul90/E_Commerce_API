import {
    CreateInvoiceService,
    PaymentCancelService,
    PaymentFailService,
    PaymentIPNService, PaymentSuccessService, InvoiceListService, InvoiceProductService
} from "../Services/InvoiceService.js";



export const CreateInvoiceController = async (req, res) => {

    let result = await CreateInvoiceService(req)
    return res.status(200).send(result)
}


export const PaymentSuccessController = async (req, res) => {

    let result = await PaymentSuccessService(req)
    return res.status(200).send(result)
}


export const PaymentFailController = async (req, res) => {

    let result = await PaymentFailService(req)
    return res.status(200).send(result)
}


export const PaymentCancelController = async (req, res) => {

    let result = await PaymentCancelService(req)
    return res.status(200).send(result)
}


export const PaymentIPNController = async (req, res) => {

    let result = await PaymentIPNService(req)
    return res.status(200).send(result)
}




export const InvoiceListController = async (req, res) => {

    let result = await InvoiceListService(req)
    return res.status(200).send(result)
}


export const InvoiceProductController = async (req, res) => {

    let result = await InvoiceProductService(req)
    return res.status(200).send(result)
}