import { existsSync, mkdir, mkdirSync, rename } from "fs";
import { diskStorage } from "multer";

export const getMulterOptions = (relativePath: string = '') => ({
    limits: {
        fileSize: 1024 * 1024 * 3
    },

    storage: diskStorage({
        destination: (_req: any, _file: any, cb: any) => {
            const storagePath = process.cwd + '/storage/'
            const splittedRelativePath = relativePath.split('/')

            let incrementalPath = storagePath

            if(!existsSync(storagePath + relativePath.replace(',', '/'))) {
                splittedRelativePath.forEach((folder) => {
                    if(!existsSync(incrementalPath + folder)) {
                        mkdirSync(incrementalPath + folder)
                    }

                    incrementalPath += folder + '/'
                })
            } else {
                incrementalPath += relativePath.replace(',', '/')
            }
            cb(null, incrementalPath)
        },
        filename: (_req: any, file: any, cb: any) => {
            cb(
                null,
                Math.ceil(Math.random() * 100000) + '_' + file.originalname
            )
        }
    })
})

export const renameUploadedFile = (filename: string, directory: string) => {
    const updatedFilename = changeFilenameSafe(filename)

    rename(
        directory + filename,
        directory + updatedFilename,
        (err) => { if(err) throw err }
    )
}

const changeFilenameSafe = (origFilename: string) => {
    new Date().valueOf()
    + '_'
    + origFilename
        .replace(/\s/, '_')
        .replace(/[^.a-zA-Z0-9_-]/g, '')
}