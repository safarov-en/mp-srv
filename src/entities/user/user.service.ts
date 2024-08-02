import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { genSalt, hash } from 'bcrypt'

import { User } from './user.entity'
import { UpdateUserDto } from './dto/updateUser.dto'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  availableFields = [
    'nameFirst',
    'nameLast',
    'email',
    'gender',
    'birthDate',
  ]

  private filterFields(body: { [k: string]: any }) {
    const filteredBody: { [k: string]: any } = {}

    Object.keys(body).filter((k) => {
      if (this.availableFields.includes(k)) {
        filteredBody[k] = body[k]
      }
    })

    return filteredBody
  }

  public async createUser(userData: any) {
    const salt = await genSalt(10)

    const hashedPassword = await hash(userData.password, salt)

    const newUser = this.userRepository.create({
      ...userData,
      password: hashedPassword,
    })

    return await this.userRepository.save(newUser)
  }

  public async getAllUsers() {
    return await this.userRepository.find({
      select: this.availableFields as any
    })
  }

  public async getUserData(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      select: this.availableFields as any
    })
  }

  public async updateUserData(id: number, body: UpdateUserDto) {
    return await this.userRepository.update(
      { id },
      this.filterFields(body)
    )
  }

  public async deleteUser(id: number) {
    return await this.userRepository.delete(id)
  }
}
