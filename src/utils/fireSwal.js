import Swal from 'sweetalert2';

/* 성공 Swal */
export const fireSuccessSwal = ({ text, afterConfirm }) => {
    Swal.fire({
        icon: 'success',
        text,
        showCancelButton: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#a5dc86',
        width: '400px'
    }).then(() => {
        afterConfirm();
    });
};

/* 경고 Swal */
export const fireWarningSwal = (text) => {
    Swal.fire({
        icon: 'warning',
        text,
        showCancelButton: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#f8bb86',
        width: '400px'
    });
};

/* 에러 Swal */
export const fireErrorSwal = (text) => {
    Swal.fire({
        icon: 'error',
        text,
        showCancelButton: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#f27474',
        width: '400px'
    });
};
