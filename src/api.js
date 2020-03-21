const ACCESS_KEY = 'client_id=0IBgt18SLbzqSOv4S7DC5MA9wgG0eyU-MJ_6eGIepzk';

const onErrorDefault = {
  400: () => ({ type: 'NOT_FOUND' }),
  500: () => ({ type: 'SERVER_ERROR' }),
  UNKNOWN_ERROR: { type: 'UNKNOWN_ERROR' }
};

const api = {
  fetchRandomImages: (onError = onErrorDefault) => {
    return request(
      `https://api.unsplash.com/photos/random?count=5&${ACCESS_KEY}`,
      onError
    );
  }
};

const request = async (url, onError) => {
  try {
    const res = await fetch(url);

    if (res instanceof Promise) throw Error('REQUEST FAILED'); //서버로부터 응답 자체를 받지 못한 경우.
    if (!res.ok) throw Error(res.status);

    return res.json();
  } catch (e) {
    console.warn(e);
    return { error: handleError(e.message, onError) };
  }
};

const handleError = (status, onError) => {
  return onError[status]
    ? { info: onError[status]() }
    : onErrorDefault.UNKNOWN_ERROR;
};

export default api;
