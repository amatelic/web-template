
export default async function(instance, opts) {
	instance.addHook('onRequest',  async function(request, reply) {
		try {
			await request.jwtVerify();
		} catch (err) {
			reply.send(err);
		}
	})
}