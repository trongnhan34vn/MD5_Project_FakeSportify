import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";
import * as albumService from "../api/albumService";
import * as categoryService from "../api/categoryService";

export const getAllCategory = function* () {
    try {
        let categories = yield call(categoryService.GET_ALL_CATEGORY)
        yield put(actions.getAllCategory(categories))
    } catch (error) {

    }
}

export const findCategoryById = function* (action) {
    try {
        let category = yield call(categoryService.FIND_CATEGORY_BY_ID, action.payload)
        yield put (actions.getCategoryById(category))
    } catch (error) {
        
    }
}