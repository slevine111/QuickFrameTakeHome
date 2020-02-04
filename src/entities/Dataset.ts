import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

export const objectNumberColName = <const>'Object Number'

@Entity()
export default class Dataset {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: objectNumberColName, nullable: true })
  [objectNumberColName]: string

  @Column({ type: 'boolean', name: 'Is Highlight', nullable: true })
  isHighlight: boolean

  @Column({ type: 'boolean', name: 'Is Public', nullable: true })
  isPublic: boolean

  @Column({ type: 'int', name: 'Object Id', nullable: true })
  ObjectId: number

  @Column({ type: 'varchar', nullable: true })
  Department: string

  @Column({ type: 'varchar', name: 'Object Name', nullable: true })
  ObjectName: string

  @Column({ type: 'varchar', nullable: true })
  Title: string

  @Column({ type: 'varchar', nullable: true })
  Culture: string

  @Column({ type: 'varchar', nullable: true })
  Period: string

  @Column({ type: 'varchar', nullable: true })
  Dynasty: string

  @Column({ type: 'varchar', nullable: true })
  Reign: string

  @Column({ type: 'varchar', nullable: true })
  Portfolio: string

  @Column({ type: 'varchar', name: 'Artist Role', nullable: true })
  artistRole: string

  @Column({ type: 'varchar', name: 'Artist Prefix', nullable: true })
  artistPrefix: string

  @Column({ type: 'varchar', name: 'Artist Display Name', nullable: true })
  artistDisplayName: string

  @Column({ type: 'varchar', name: 'Artist Display Bio', nullable: true })
  artistDisplayBio: string

  @Column({ type: 'varchar', name: 'Artist Suffix', nullable: true })
  artistSuffix: string

  @Column({ type: 'varchar', name: 'Artist Alpha Sort', nullable: true })
  artistASort: string

  @Column({ type: 'varchar', name: 'Artist Nationality', nullable: true })
  artistNat: string

  @Column({ type: 'int', name: 'Artist Begin Date', nullable: true })
  artistBeginDate: number

  @Column({ type: 'int', name: 'Artist EndDate', nullable: true })
  artistENdDte: number

  @Column({ type: 'varchar', name: 'Object Date', nullable: true })
  objectDate: string

  @Column({ type: 'varchar', nullable: true })
  Medium: string

  @Column({ type: 'varchar', nullable: true })
  Dimensions: string

  @Column({ type: 'varchar', name: 'Credit Line', nullable: true })
  creditline: string

  @Column({ type: 'varchar', name: 'Geography Type', nullable: true })
  GeographyType: string

  @Column({ type: 'varchar', nullable: true })
  City: string

  @Column({ type: 'varchar', nullable: true })
  State: string

  @Column({ type: 'varchar', nullable: true })
  County: string

  @Column({ type: 'varchar', nullable: true })
  Country: string

  @Column({ type: 'varchar', nullable: true })
  Region: string

  @Column({ type: 'varchar', nullable: true })
  Subregion: string

  @Column({ type: 'varchar', nullable: true })
  Locale: string

  @Column({ type: 'varchar', nullable: true })
  Locus: string

  @Column({ type: 'varchar', nullable: true })
  Excavation: string

  @Column({ type: 'varchar', nullable: true })
  River: string

  @Column({ type: 'varchar', nullable: true })
  Classification: string

  @Column({ type: 'varchar', name: 'Rights and Reproduction', nullable: true })
  rAndR: string

  @Column({ type: 'varchar', name: 'Link Resource', nullable: true })
  linkResource: string

  @Column({ type: 'varchar', name: 'Metadata Date', nullable: true })
  metadataDate: string

  @Column({ type: 'varchar', nullable: true })
  Repository: string

  @Column({ type: 'varchar', nullable: true })
  Tags: string
}
