"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnedUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class ReturnedUserDto extends (0, mapped_types_1.OmitType)(create_user_dto_1.CreateUserDto, ['password']) {
}
exports.ReturnedUserDto = ReturnedUserDto;
//# sourceMappingURL=returned-user.dto.js.map