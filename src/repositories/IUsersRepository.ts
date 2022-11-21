import { User } from "../entity/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  validateUser(email: string, password: string): Promise<boolean>;
  save(user: User): Promise<void>;
}