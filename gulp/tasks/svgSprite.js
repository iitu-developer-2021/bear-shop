import svgSpriteLib  from "gulp-svg-sprite"

export const svgSprite = () => {
  return app.gulp.src(app.path.src.svgicons)
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
      title: "SVG",
      message: "Error: <%= error.message %>"
    })))
    .pipe(svgSpriteLib({
      mode: {
        stack: {
          sprite: '../icons.svg',
          example: false
        }
      }
    }))
    .pipe(app.gulp.dest(app.path.build.images))
}
