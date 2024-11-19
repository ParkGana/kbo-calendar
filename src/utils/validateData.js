import { fireWarningSwal } from './fireSwal';

/* 회원가입 유효성 검사 */
export const validateSignUp = ({ data, afterValidate }) => {
    const { email, password, passwordConfirm, name, team } = data;

    let text = '';

    // 특정 값이 입력되지 않은 경우
    if (!email || !password || !passwordConfirm || !name) {
        text = '입력되지 않은 값이 존재합니다.';
    }
    // 비밀번호가 일치하지 않는 경우
    else if (password !== passwordConfirm) {
        text = '비밀번호가 일치하지 않습니다.';
    }
    // select box에 값이 선택되지 않은 경우
    else if (!team) {
        text = '선택되지 않은 값이 존재합니다.';
    }

    text ? fireWarningSwal(text) : afterValidate();
};
