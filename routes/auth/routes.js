'use strict'

// import auth from '../../plugins/auth.js';

export default async function (fastify, opts) {

	// fastify.register(auth)

	fastify.get('/', async function (request, reply) {
		return 'this is an example'
	})


	fastify.post('/signup', (req, reply) => {
		const token = fastify.jwt.sign({ payload });
		reply.send({ token });
	})

	// for testing purposes only 
	// remove on production and in the autohooks script

	if (process.env.NODE_ENV === 'develop') {
		fastify.post('/generate-token', async (req, reply) => {
			const token = await fastify.jwt.sign(req.body);
			req.log.info(`Created token for user ${req.body.email}`)
			reply.send({ token });
		})
	}
}


// export const autoPrefix = '/auth'