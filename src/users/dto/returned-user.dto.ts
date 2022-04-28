/* eslint-disable prettier/prettier */

import { OmitType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class ReturnedUserDto extends OmitType(CreateUserDto, ['password'] as const) {}