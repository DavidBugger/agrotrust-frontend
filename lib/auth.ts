import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const signInWithPhone = async (phone: string) => {
    if (!supabase) return { data: null, error: { message: "Supabase not configured. Please add NEXT_PUBLIC_SUPABASE_URL to your .env.local file." } };
    const { data, error } = await supabase.auth.signInWithOtp({
        phone: phone,
    });
    return { data, error };
};

export const verifyOtp = async (phone: string, token: string) => {
    if (!supabase) return { data: { session: null }, error: { message: "Supabase not configured." } };
    const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token,
        type: 'sms',
    });

    if (data.session) {
        localStorage.setItem('supabase-token', data.session.access_token);
    }

    return { data, error };
};

export const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    localStorage.removeItem('supabase-token');
};
