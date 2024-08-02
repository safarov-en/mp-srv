"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.availableFields = [
            'nameFirst',
            'nameLast',
            'email',
            'gender',
            'birthDate',
        ];
    }
    filterFields(body) {
        const filteredBody = {};
        Object.keys(body).filter((k) => {
            if (this.availableFields.includes(k)) {
                filteredBody[k] = body[k];
            }
        });
        return filteredBody;
    }
    async createUser(userData) {
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedPassword = await (0, bcrypt_1.hash)(userData.password, salt);
        const newUser = this.userRepository.create({
            ...userData,
            password: hashedPassword,
        });
        return await this.userRepository.save(newUser);
    }
    async getAllUsers() {
        return await this.userRepository.find({
            select: this.availableFields
        });
    }
    async getUserData(id) {
        return await this.userRepository.findOne({
            where: { id },
            select: this.availableFields
        });
    }
    async updateUserData(id, body) {
        return await this.userRepository.update({ id }, this.filterFields(body));
    }
    async deleteUser(id) {
        return await this.userRepository.delete(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map