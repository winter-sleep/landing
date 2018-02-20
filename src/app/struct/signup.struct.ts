/**
 * 注册表单数据模型
 */
export interface SignupData {
    email: string;
    nickname: string;
    password: string;
    repassword: string;
    gender: number;
    identify: string;
}

export interface FieldState {
    email: Boolean;
    nickname: Boolean;
    password: Boolean;
    repassword: Boolean;
    gender: Boolean;
    identify: Boolean;
}

export interface MessageBox {
    email: string;
    nickname: string;
    password: string;
    repassword: string;
    gender: string;
    identify: string;
}
