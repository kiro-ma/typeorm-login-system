import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source"

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = await AppDataSource.getRepository(User).createQueryBuilder("user").where("user.email = :email", { email: email }).getOne()
    return user;
  }

  async save(user: User): Promise<void> {
    await AppDataSource.manager.save(user)
  }
}