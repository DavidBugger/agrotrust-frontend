import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth header interceptor
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('supabase-token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const farmerApi = {
    getHome: () => api.get('/farmers/home'),
    getProfile: () => api.get('/farmers/profile'),
    getActivities: () => api.get('/farm-activities'),
    logActivity: (data: any) => api.post('/farm-activities', data),
    getTrustLevel: () => api.get('/farmers/trust-level'),
};

export const partnerApi = {
    listFarmers: (params?: any) => api.get('/partners/farmers', { params }),
    getFarmerDetail: (id: string) => api.get(`/partners/farmers/${id}`),
};

export default api;
