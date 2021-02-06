import AV from "leancloud-storage";
import { appId, appKey, serverURL } from "../constants/auth";

AV.init({
  appId,
  appKey,
  serverURL,
});

async function fetch(url, payload, method) {
  const query = new AV.Query(url);
  if (!payload) {
    return method ? query[method]() : query.find();
  }
  const {
    limit,
    skip,
    labels,
    labelsBy,
    pin = true,
    sort,
    sortBy,
    select,
    equal,
    equalVal,
  } = payload;
  const arrayString = (val) => {
    if (val && typeof val === "string") return val;
    return val.shift();
  };

  limit && query.limit(limit);
  skip && query.skip(skip);
  select && query.select(select);
  equal && equalVal && query.equalTo(equal, equalVal);
  !!pin && query.addDescending("pin");
  if (sort && sort === true && sortBy) {
    query.addAscending(sortBy);
  } else if (sort && sort === true) {
    query.addDascending("ct");
  } else {
    query.addDescending("ct");
  }

  if (labels && labelsBy) {
    if (
      typeof labelsBy === "string" ||
      (Array.isArray(labelsBy) && labelsBy.length === 1)
    ) {
      query.equalTo(labels, arrayString(labelsBy));
    } else if (Array.isArray(labelsBy) && labelsBy.length > 1) {
      query.equalTo(labels, labelsBy);
    }
  }

  return method ? query[method]() : query.find();
}

export default fetch;
