// composables/useHEaseImager.js
export const userImager = () => {
    const config = useRuntimeConfig();
    const imager = (image) => {
        return config.public.ApiBaseUrl + 'storage/' + image;
    };

    return { imager };
};
