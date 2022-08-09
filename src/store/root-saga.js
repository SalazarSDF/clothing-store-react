import { all, call } from "@redux-saga/core/effects";

import { categoriesSaga } from "./categories/category.saga";

export function* rootSaga(){
  yield all([call(categoriesSaga)]);

}
