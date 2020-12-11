import bent from "bent";
import {option} from "../../../../option";

export const reqSearch = async(words) =>{

    const res = await bent(
        option.api,
        "string",
        "POST",
        "json",
        200
    )("/goods/search", {words}, {});
    // console.log('res', res.result);
    return !res.invalid ? res.result : []
}