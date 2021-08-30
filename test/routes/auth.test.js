'use strict'

import { test } from 'tap'
import { build } from '../helper.js'

test('Authentication is failing', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/auth'
  })

  console.log('Response:', res.statusCode);
  t.equal(res.statusCode, 401);
})

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })
