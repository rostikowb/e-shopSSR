import bent from "bent";
import {option} from "../../../../option";

export const reqFilter = async (ctgrId) =>{
  const res = await bent(
    option.api,
    "string",
    "POST",
    "json",
    200
  )("/filter/read/"+ctgrId);
  try {
    return res.result.prm[0]
  }catch (e) {
    return {}
  }

}