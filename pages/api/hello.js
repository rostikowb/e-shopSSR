// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// app.get("/service-worker.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
// });

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
