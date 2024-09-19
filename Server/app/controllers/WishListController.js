import {RemoveWishListService,
        CreateWishListService,
        WishListService
        } from "../Services/WishListService.js";


export const WishList = async (req, res) => {
    let result = await WishListService(req);
    res.status(200).json(result);
}


export const CreateWishList = async (req, res) => {
    let result = await CreateWishListService(req);
    res.status(200).json(result);
}

export const RemoveWishList = async (req, res) => {
    let result = await RemoveWishListService(req);
    res.status(200).json(result);
}