import through2 from "through2";
import vinyl from "vinyl";
export const transformStreamFn = (
    tranformFn: (chunkString: string, basename: string) => string | undefined
) => {
    return through2.obj((file: vinyl, encoding = "utf-8", done) => {
        if (file.isBuffer()) {
            const chunkString = file.contents.toString(encoding);
            const basename = file.stem;
            const processedchunk = tranformFn(chunkString, basename);
            if(processedchunk) {
                file.contents = Buffer.from(processedchunk);
                done(null, file);
            }
        } else {
            done(null, file);
        }
    });
};
export const TransformStreamAsyncFn = (
    tranformFn: (chunkString: string, basename: string) => Promise<string>
) => {
    return through2.obj((file: vinyl, encoding = "utf-8", done) => {
        if (file.isBuffer()) {
            const chunkString = file.contents.toString(encoding);
            const basename = file.stem;
            tranformFn(chunkString, basename)
                .then((processedchunk) => {
                    file.contents = Buffer.from(processedchunk);
                    done(null, file);
                })
                .catch((err) => {
                    done(err, null);
                });
        } else {
            done(null, file);
        }
    });
};
