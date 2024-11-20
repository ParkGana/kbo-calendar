import { createClient } from '@supabase/supabase-js';
import { fireErrorSwal } from '../utils/fireSwal';
import { manageSignUpError } from '../utils/manageError';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/* teams 데이터 가져오기 */
export const fetchTeams = async () => {
    const { data, error } = await supabase.from('teams').select('*').order('name_english');

    if (error) {
        fireErrorSwal('구단 정보를 가져오지 못했습니다.');
        throw error;
    }

    return data;
};

/* auth user 데이터 생성하기 (회원가입) */
export const createAuthUser = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        fireErrorSwal(manageSignUpError(error.message));
        throw error;
    }

    return data.user;
};

/* user 데이터 생성하기 (회원가입) */
export const createUser = async ({ auth, name, teamId }) => {
    const { error } = await supabase.from('users').insert({ id: auth.id, name, team_id: teamId }).single();

    if (error) {
        fireErrorSwal('회원가입을 실패하였습니다.');
        throw error;
    }
};

/* 로그인 */
export const signin = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        fireErrorSwal('일치하는 정보가 존재하지 않습니다.');
        throw error;
    }
};

/* 로그아웃 */
export const signout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
        fireErrorSwal('로그아웃을 실패하였습니다.');
        throw error;
    }
};

/* 로그인한 유저 데이터 가져오기 */
export const fetchUser = async () => {
    const { data: authData, error: authError } = await supabase.auth.getUser();

    if (authError) return null;

    const { data, error } = await supabase.from('users').select('*, teams: team_id(*)').eq('id', authData.user.id).single();

    return error ? null : data;
};
