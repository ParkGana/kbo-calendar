import Swal from 'sweetalert2';

/* 성공 Swal */
export const fireSuccessSwal = ({ text, afterConfirm }) => {
    Swal.fire({
        icon: 'success',
        text,
        showCancelButton: false,
        confirmButtonText: '확인',
        confirmButtonColor: '#a5dc86',
        width: '24rem'
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
        width: '24rem'
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
        width: '24rem'
    });
};

/* 확인 Swal */
export const fireConfirmSwal = ({ text, afterConfirm }) => {
    Swal.fire({
        icon: 'question',
        text,
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        confirmButtonColor: '#87adbd',
        cancelButtonColor: '#636c74',
        width: '24rem'
    }).then((result) => {
        if (result.isConfirmed) {
            afterConfirm();
        }
    });
};

/* Toast */
export const fireToast = (text) => {
    Swal.fire({
        toast: true,
        text,
        position: 'top',
        icon: 'success',
        iconColor: 'white',
        background: '#a5dc86',
        color: 'white',
        customClass: {
            popup: 'colored-toast'
        },
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: false
    });
};
