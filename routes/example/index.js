'use strict'

export default async function (fastify, opts) {
  
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })
}


export const autoPrefix = '/example'