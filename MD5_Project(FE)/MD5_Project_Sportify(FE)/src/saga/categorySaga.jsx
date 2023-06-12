import { call, put } from "redux-saga/effects";
import * as actions from "../redux/actions";
import * as albumService from "../api/albumService";
import * as categoryService from "../api/categoryService";

export const getAllCategory = function* () {
    try {
        let categories = yield call(categoryService.GET_ALL_CATEGORY)
        yield put(actions.getAllCategory(categories))
        console.log(categories);
    } catch (error) {
        console.log(error);
    }
}