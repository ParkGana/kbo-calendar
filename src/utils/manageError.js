/* 회원가입 오류 */
export const manageSignUpError = (message) => {
    switch (message) {
        // 이미 존재하는 이메일인 경우
        case 'User already registered':
            return '이미 존재하는 이메일입니다.';
        // 이메일 형태가 아닌 경우
        case 'Unable to validate email address: invalid format':
            return '이메일 형태가 아닙니다.';
        // 비밀번호가 6자리 미만인 경우
        case 'Password should be at least 6 characters.':
            return '비밀번호는 6자리 이상이어야 합니다.';
        default:
            return '회원가입에 실패하였습니다.';
    }
};
