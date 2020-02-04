import fs from 'fs'
import csv from 'csv-parser'
import ClassificationsCount from './entities/ClassificationsCount'
import Dataset, { objectNumberColName } from './entities/Dataset'
import { createConnection, Connection } from 'typeorm'

const filteredData: Dataset[] = []
const classificationCount: { [key: string]: number } = {}

export default async (): Promise<any> => {
  const connection: Connection = await createConnection()
  await connection.synchronize(true)
  const dataSetRepo = await connection.getRepository(Dataset)
  const classCountRepo = await connection.getRepository(ClassificationsCount)
  return fs
    .createReadStream('DataEngineerDataSet.csv')
    .pipe(csv())
    .on('data', (row: Dataset) => {
      if (/^[0-9]+[.][0-9]+[.][0-9]+$/.test(row[objectNumberColName])) {
        if (classificationCount[row.Classification] !== undefined) {
          classificationCount[row.Classification]++
        } else {
          classificationCount[row.Classification] = 1
        }

        filteredData.push(row)
      }
    })
    .on('end', async () => {
      let classifictionsArr: ClassificationsCount[] = []
      for (let key in classificationCount) {
        classifictionsArr.push({
          Classification: key,
          count: classificationCount[key]
        })
      }
      await Promise.all([
        dataSetRepo.save(filteredData),
        classCountRepo.save(classifictionsArr)
      ])
      console.log('dtabase successfully loaded')
      return connection.close()
    })
}
