import express from 'express'

const app = express()

const gateway = braintree.connect({
  environment: braintree.Evironment.sandbox,
  merchantID: 'f7fk79dhpx4fwy93',
  publicKey: 'b6t3ckmch6g695ss',
  privateKey: 'b33c79621797622e43894fcd16286afc'
})

app.listen('4000', () => {
  console.log('### RESTFUL SERVER LISTENING ON PORT 4000')
})

app.get('/client_token', (req, res) => {
  gateway.clientToken.generate({}, (err, res2) => {
    res.send(res2.clientToken)
  })
})
