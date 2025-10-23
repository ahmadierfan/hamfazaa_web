import axios from 'axios';
import { useLoadingStore } from '@/stores/loading';

export default defineNuxtPlugin((nuxtApp) => {
  const { public: { ApiUrl } } = useRuntimeConfig();
  const router = useRouter()
  const toast = useToast()

  const loadingStore = useLoadingStore();

  const freeApi = axios.create({ baseURL: ApiUrl });
  freeApi.defaults.headers.common['Accept-Language'] = "fa";

  const updateAuthHeader = (token) => {
    freeApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  if (import.meta.client) {
    const token = localStorage.getItem('jwt_token');
    if (token) {
      updateAuthHeader(token);
    }
  }

  const isLocalhost = () => {
    return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  };
  const checkInternetConnection = () => {
    if (isLocalhost()) {
      return true;
    }
    return navigator.onLine;
  };

  const errorHandler = (error) => {
    loadingStore.setLoading(false);

    if (!error.response) {
      toast.error({ title: 'خطا!', message: 'دسترسی به اینترنت مقدور نمی باشد' })
    } else {

      const { status, data } = error.response;

      if (status === 400 || status === 422) {
        message = data.message || 'error.bad_request';
        if (data.issues && Object.keys(data.issues).length > 0) {
          const firstErrorKey = Object.keys(data.issues)[0];
          const firstErrorMessage = data.issues[firstErrorKey][0];
          message = firstErrorMessage;
        }
        if (data.errors && Object.keys(data.errors).length > 0) {
          const firstErrorKey = Object.keys(data.errors)[0];
          const firstErrorMessage = data.errors[firstErrorKey][0];
          message = firstErrorMessage;
        }

      }
      else if (status === 401) router.push('/login');
      else if (status === 403) {
        message = data.message || t('error.forbidden');
        router.push('/pricing')
      }
      else if (status === 404) message = 'error.not_found';
      else if (status === 500)
        var message = error.response?.data?.message || 'error.server';

      toast.error({ title: '!', message: message })
    }

    return Promise.reject(error);
  };


  freeApi.interceptors.request.use(
    (config) => {
      if (!checkInternetConnection()) {
        return Promise.reject({ message: 'error.no_internet' });
      }
      loadingStore.setLoading(true);
      return config;
    },
    (error) => {
      loadingStore.setLoading(false);
      return Promise.reject(error);
    }
  );


  freeApi.interceptors.response.use(
    (response) => {
      loadingStore.setLoading(false);
      return response;
    },
    errorHandler
  );


  return {
    provide: {
      freeApi,
      updateAuthHeader,
    },
  };
});
