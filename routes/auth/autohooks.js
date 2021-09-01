
// basic plugin for checking if user has auth token
export default async function(instance, opts) {
	instance.addHook('onRequest',  async function(request, reply) {
		try {

			if (request.url === '/auth/generate-token') {
				if (process.env.NODE_ENV === 'develop') {
					return true;
				}	
			}
		
			if (!request.raw.headers.auth) {
				new Error('Missing token header');
			}
		
			let decoded = await request.jwtVerify();


			if (!decoded.user || !decoded.password) {
				new Error('Token not valid');
			}

		} catch (err) {
			console.log('erorrr', err)
			reply.send(err);
		}
	})
}