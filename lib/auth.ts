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
        // console.log(data.session.access_token);
        const accessToken = data.session.access_token;
        localStorage.setItem('supabase-token', accessToken);

        // Set cookie for middleware
        document.cookie = `auth-token=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict; Secure`;
    }

    return { data, error };
};

export const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    localStorage.removeItem('supabase-token');
    document.cookie = "auth-token=; path=/; max-age=0; SameSite=Strict; Secure";
};
