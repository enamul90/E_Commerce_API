import {CreateCardListService,
    updateCardListService,
    RemoveCardListService,
    CardListService
} from "../Services/CartListService.js";


export const CardList = async (req, res) => {
    let result = await CardListService(req);
    res.status(200).json(result);
}


export const CreateCardList = async (req, res) => {
    let result = await CreateCardListService(req);
    res.status(200).json(result);
}


export const UpdateCardList = async (req, res) => {
    let result = await updateCardListService(req);
    res.status(200).json(result);
}


export const RemoveCardList = async (req, res) => {
    let result = await RemoveCardListService(req);
    res.status(200).json(result);
}