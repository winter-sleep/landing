/**
 * 注册表单数据模型
 */
export class SignupData {
    public email: string;
    public nickname: string;
    public password: string;
    public repassword: string;
    public gender: number;
    public identify: string;
}

export class FieldState {
    public email: Boolean;
    public nickname: Boolean;
    public password: Boolean;
    public repassword: Boolean;
    public gender: Boolean;
    public identify: Boolean;
}
