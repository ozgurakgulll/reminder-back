import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sms')
export class SmsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @CreateDateColumn()
  date: Date;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  surname: string;
  @Column({ type: 'bigint'})
  tc: number;
  @Column()
  dose: number;
  @Column({ nullable: true, type: 'bigint',array:true })
  phone: number[];
}
