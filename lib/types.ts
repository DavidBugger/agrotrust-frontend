export interface FarmerProfile {
    id: string;
    full_name: string;
    location: string;
    main_crop: string;
    farm_size: string;
    trust_level: string;
    internal_score: number;
}

export interface FarmActivity {
    id: string;
    activity_type: string;
    activity_date: string;
    notes?: string;
    photo_url?: string;
    created_at: string;
}

export interface TrustReport {
    trust_level: string;
    status_color: string;
    explanation: string[];
    tips: string[];
}
