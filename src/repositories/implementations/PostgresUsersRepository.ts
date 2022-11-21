import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source"
//Classe DAO (Data Access Object)
export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = await AppDataSource.getRepository(User).createQueryBuilder("user").where("user.email = :email", { email: email }).getOne()
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (password === user.password) { return true } else { return false }
  }

  async save(user: User): Promise<void> {
    await AppDataSource.manager.save(user)
  }

}