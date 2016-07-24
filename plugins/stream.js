'use strict';

const H2o2 = require('h2o2');

module.exports = {
	name: 'stream',
	data: H2o2,
	when : {
		'plugin:stream': function(){
			this.server.route({
				method  : 'GET',
				path    : '/stream',
				handler : { proxy: {
					uri                   : 'http://127.0.0.1:8000/?type=http',
					passThrough           : true,
					localStatePassThrough : false,
					xforward              : true
				}}
			})
		}
	}
}