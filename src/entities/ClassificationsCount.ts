import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export default class ClassificationCount {
  @PrimaryColumn('varchar')
  Classification: string

  @Column('int')
  count: number
}
