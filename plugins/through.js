import through2 from "through2";

export const customTransformStreamFn = (tranformFn, isAsync) => {
    return through2.obj((file, encoding = "utf-8", done) => {
        if (file.isBuffer()) {
            const chunkString = file.contents.toString(encoding);
            const basename = file.stem;
            if (!isAsync) {
                try {
                    const processedchunk = tranformFn(chunkString, basename);
                    file.contents = Buffer.from(processedchunk);
                    done(null, file);
                } catch (err) {
                    done(err, null);
                }
            } else {
                tranformFn(chunkString, basename)
                    .then((processedchunk) => {
                        file.contents = Buffer.from(processedchunk);
                        done(null, file);
                    })
                    .catch((err) => {
                        done(err, null);
                    });
            }
        } else {
            done(null, file);
        }
    });
};
