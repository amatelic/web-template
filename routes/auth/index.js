'use strict'

export default async function (fastify, opts) {

	// fastify.addHook('preHandler', fastify.auth([
	// ]))
	console.log(fastify.authenticate);
	fastify.addHook('preHandler', (request, reply, done) => {
		console.log(fastify.authenticate);
		done()
	})

	fastify.addHook('onRequest', async(req, reply) => {
		try {
			// await req.jwtVerify();
		} catch (err) {
			reply.send(err);
		}
	})
  
	fastify.get('/', async function (request, reply) {
		return 'this is an example'
	})


	fastify.post('/signup', (req, reply) => {
		const token = fastify.jwt.sign({ payload });
		reply.send({ token });
	})
}


export const autoPrefix = '/auth'