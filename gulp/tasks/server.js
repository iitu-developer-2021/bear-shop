export const server = () => {
  return app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`
    },
    tunnel: true,
    notify: false,
    port: 3000
  })
}
