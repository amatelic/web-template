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
}


// export const autoPrefix = '/auth'