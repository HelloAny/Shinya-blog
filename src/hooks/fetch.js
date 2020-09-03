import { useState, useEffect, useCallback } from "react";
import worker_script from "../utils/octokitQL"
import resolveResponse from "../utils/resolve"
var myWorker = new Worker(worker_script)
function useFetch(params, visible = true) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [newParams, setNewParams] = useState(params);
  const fetchApi = useCallback(async () => {
    if (visible) {
      setLoading(true);
      myWorker.postMessage(newParams);
      myWorker.onmessage = (e) => {
        const res = e.data
        console.log("res", res)
        if (res.error) {
          setError(true)
        }
        console.log("res", res)
        setData(resolveResponse(newParams.action, res));
        setLoading(false);
      }
    }
  }, [newParams, visible]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const doFetch = useCallback(
    rest => {
      setNewParams({ ...newParams, ...(rest || {}) });
    },
    [newParams]
  );

  const reFetch = () => {
    setNewParams(Object.assign({}, newParams));
  };
  return {
    loading,
    error,
    data,
    doFetch,
    reFetch
  };
}

export default useFetch;
