import { supabase } from '../../supabase.config';

/* auth user 데이터 생성하기 (회원가입) */
export const createAuthUserAPI = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    return { user: data.user, error };
};

/* user 데이터 생성하기 (회원가입) */
export const createUserAPI = async ({ auth, name, team }) => {
    const { error } = await supabase.from('users').insert({
        id: auth.id,
        name,
        team_id: team.id
    });

    return { error };
};

/* 로그인 */
export const signinAPI = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    return { error };
};

/* 로그아웃 */
export const signoutAPI = async () => {
    const { error } = await supabase.auth.signOut();

    return { error };
};

/* 로그인한 유저 데이터 가져오기 */
export const fetchUserAPI = async () => {
    const { data: authData, error: authError } = await supabase.auth.getUser();

    if (authError) return null;

    const { data, error } = await supabase.from('users').select('*, team: team_id(*, stadium:stadiums(*))').eq('id', authData.user.id).single();

    return error ? null : data;
};

/* session 데이터 가져오기 */
export const fetchSessionAPI = async () => {
    const { data, error } = await supabase.auth.getSession();

    return error ? null : data.session.access_token;
};
