import { CreateUserDto } from "./create-user.dto";
declare const ReturnedUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<CreateUserDto, "password">>;
export declare class ReturnedUserDto extends ReturnedUserDto_base {
}
export {};
