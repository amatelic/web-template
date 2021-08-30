'use strict'

import path from 'path';
import AutoLoad from 'fastify-autoload'
import Sensible from 'fastify-sensible'
import Env from 'fastify-env'
import Cors from 'fastify-cors'
import UnderPressure from 'under-pressure'
import S from 'fluent-json-schema'
import { join } from 'desm'
import ps from 'fastify-postgres';
import auth from 'fastify-jwt';

export default async function (fastify, opts) {
  // Place here your custom code!

  fastify.register(Env, {
    schema: S.object()
      .prop('NODE_ENV', S.string().required())
      .prop('JWT_SECRET', S.string().required())
      .valueOf()
  })

  fastify.register(Sensible)

  fastify.register(UnderPressure, {
    maxEventLoopDelay: 1000,
    maxHeapUsedBytes: 1000000000,
    maxRssBytes: 1000000000,
    maxEventLoopUtilization: 0.98
  })

  fastify.register(Cors, {
    origin: false
  })

  fastify.register(ps, {
    connectionString: 'postgres://postgres@localhost/postgres'
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'plugins'),
    options: Object.assign({}, opts)
  })

  // Then, we'll load all of our routes.
  fastify.register(AutoLoad, {
    dir: join(import.meta.url, 'routes'),
    // dirNameRoutePrefix: false,
    autoHooks: true, 
    cascadeHooks: true,
    options: Object.assign({}, opts)
  })

  // adding jwt authentication 
  fastify.register(auth, {
    secret: process.env.JWT_SECRET
  })

  // used for setting on 404 page
  // fastify.setNotFoundHandler((req, reply) => {
  //   reply.send('404 error')
  // })
}
