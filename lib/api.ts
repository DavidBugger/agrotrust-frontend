import axios from 'axios';

const API_BASE_URL = '/api';

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
    updateProfile: (data: any) => api.put('/farmers/profile', data),
};

export const partnerApi = {
    listFarmers: (params?: any) => api.get('/partners/farmers', { params }),
    getFarmerDetail: (id: string) => api.get(`/partners/farmers/${id}`),
};

export const adminApi = {
    getStats: () => Promise.resolve({
        data: {
            total_farmers: 1240,
            avg_trust_score: 750,
            active_loans: 300,
            pending_verifications: 45,
            recent_activity: [
                { id: 1, user: "John Doe", action: "Logged Planting", time: "2 mins ago" },
                { id: 2, user: "Jane Smith", action: "Updated Profile", time: "1 hour ago" },
                { id: 3, user: "Green Farms", action: "Loan Approved", time: "3 hours ago" },
            ]
        }
    }),
};

export default api;
