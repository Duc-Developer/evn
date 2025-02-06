const APP_CONFIGS: { [key: string]: string } = {
    ROOT_API: import.meta.env.VITE_REACT_APP_API_URL,
    ACCESS_TOKEN: import.meta.env.VITE_REACT_APP_ACCESS_TOKEN,
};

export default APP_CONFIGS;
